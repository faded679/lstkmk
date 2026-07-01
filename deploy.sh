#!/bin/bash
set -e

echo "=== Deploy lstkmk.ru ==="

cd /var/www/lstkmk.ru

echo "Pull latest code..."
git pull origin main

echo "Stop PM2..."
pm2 kill || true

echo "Kill stuck next-server processes..."
pkill -9 -f "next-server" || true
pkill -9 -f "next start" || true

echo "Install dependencies..."
npm install

echo "Clear cache..."
rm -rf .next
rm -rf /tmp/next*

echo "Build..."
npm run build

echo "Start PM2..."
pm2 start ecosystem.config.js --force
pm2 save

echo "=== Deploy complete ==="
echo "Check status:"
pm2 status
ss -tlnp | grep 3001
curl -s -o /dev/null -w "HTTP: %{http_code}\n" http://localhost:3001
