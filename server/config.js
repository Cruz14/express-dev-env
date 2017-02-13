const pkg = require('../package.json');

const config = {
  app: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    domain: process.env.APP_DOMAIN
  },
  logger: {
    enabled: process.env.LOGGER_ENABLED !== 'false',
    level: process.env.LOGGER_LEVEL,
    stream: process.env.LOGGER_STREAM
  },
  security: {
    enabled: process.env.SECURITY_ENABLED !== 'INSECURE_HACKED'
  }
};

config.id = `${config.app.host}:${pkg.name}@${pkg.version}:${config.app.port}`;

if (config.logger.level === 'trace') {
  console.log(JSON.stringify(config)); // eslint-disable-line no-console
}

module.exports = config;
