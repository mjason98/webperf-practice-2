module.exports = {
    apps: [{
      name: 'store-app',
      script: 'server/server.js',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    }],
  };