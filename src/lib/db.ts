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
      )
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
