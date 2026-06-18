import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'leads.db');

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(dbPath);
    db.exec(`
      CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone TEXT NOT NULL,
        comment TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS user_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id TEXT,
        source TEXT NOT NULL,
        content TEXT NOT NULL,
        ip TEXT,
        user_agent TEXT,
        meta TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE INDEX IF NOT EXISTS idx_user_messages_created ON user_messages(created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_user_messages_session ON user_messages(session_id);
    `);
  }
  return db;
}

export interface Lead {
  id: number;
  name: string;
  phone: string;
  comment: string;
  created_at: string;
}

export function saveLead(name: string, phone: string, comment: string): Lead {
  const db = getDb();
  const stmt = db.prepare('INSERT INTO leads (name, phone, comment) VALUES (?, ?, ?)');
  const result = stmt.run(name, phone, comment);
  
  return {
    id: result.lastInsertRowid as number,
    name,
    phone,
    comment,
    created_at: new Date().toISOString()
  };
}

export function getLeads(limit = 100, offset = 0): Lead[] {
  const db = getDb();
  const stmt = db.prepare('SELECT * FROM leads ORDER BY created_at DESC LIMIT ? OFFSET ?');
  return stmt.all(limit, offset) as Lead[];
}

export function getLeadsCount(): number {
  const db = getDb();
  const stmt = db.prepare('SELECT COUNT(*) as count FROM leads');
  const result = stmt.get() as { count: number };
  return result.count;
}

export interface UserMessage {
  id: number;
  session_id: string | null;
  source: string;
  content: string;
  ip: string | null;
  user_agent: string | null;
  meta: string | null;
  created_at: string;
}

export interface SaveUserMessageInput {
  source: string;
  content: string;
  sessionId?: string | null;
  ip?: string | null;
  userAgent?: string | null;
  meta?: Record<string, unknown> | null;
}

export function saveUserMessage(input: SaveUserMessageInput): void {
  try {
    const db = getDb();
    const stmt = db.prepare(
      'INSERT INTO user_messages (session_id, source, content, ip, user_agent, meta) VALUES (?, ?, ?, ?, ?, ?)'
    );
    stmt.run(
      input.sessionId ?? null,
      input.source,
      input.content,
      input.ip ?? null,
      input.userAgent ?? null,
      input.meta ? JSON.stringify(input.meta) : null
    );
  } catch (err) {
    console.error('saveUserMessage failed:', err);
  }
}

export function getUserMessages(limit = 200, offset = 0): UserMessage[] {
  const db = getDb();
  const stmt = db.prepare(
    'SELECT * FROM user_messages ORDER BY created_at DESC LIMIT ? OFFSET ?'
  );
  return stmt.all(limit, offset) as UserMessage[];
}

export function getUserMessagesCount(): number {
  const db = getDb();
  const stmt = db.prepare('SELECT COUNT(*) as count FROM user_messages');
  const result = stmt.get() as { count: number };
  return result.count;
}
