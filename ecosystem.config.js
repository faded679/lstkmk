module.exports = {
  apps: [{
    name: 'lstkmk',
    cwd: '/var/www/lstkmk.ru',
    script: 'npm',
    args: 'run start',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001,
      HOSTNAME: '0.0.0.0'
    },
    // Логи
    log_file: '/var/log/pm2/lstkmk.log',
    out_file: '/var/log/pm2/lstkmk-out.log',
    error_file: '/var/log/pm2/lstkmk-error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    // Graceful shutdown и предотвращение бесконечных рестартов
    kill_timeout: 10000,
    listen_timeout: 10000,
    shutdown_with_message: true,
    min_uptime: '10s',
    max_restarts: 3,
  }]
};
