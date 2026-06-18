import type { NextRequest } from 'next/server';

export function getClientIp(req: NextRequest): string | null {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  const real = req.headers.get('x-real-ip');
  if (real) return real;
  return null;
}

export function getUserAgent(req: NextRequest): string | null {
  return req.headers.get('user-agent');
}
