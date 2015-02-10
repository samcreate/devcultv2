var config = {
  local: {
    server: {
      port: 3002
    },
    htmlPretty: true
  },
  development: {
    server: {
      port: 3000
    },
    htmlPretty: true
  },
  testing: {
    server: {
      port: 3001
    }
  },
  production: {
    server: {
      port: 8080
    }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
