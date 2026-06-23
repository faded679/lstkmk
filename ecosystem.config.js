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
    // Перезапуск при нехватке памяти
    kill_timeout: 5000,
    listen_timeout: 10000,
    // Graceful reload
    shutdown_with_message: true,
  }]
};
