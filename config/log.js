const fs = require('fs');

const logPath = join('logs');
const appLogPath = join('logs', 'app');
const infoLogPath = join('logs', 'info');
const errorLogPath = join('logs', 'error');
const debugLogPath = join('logs', 'debug');

if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath, '0777');
}

module.exports = {
  'appenders': [{
    'category': 'error',
    'type': 'dateFile',
    'filename': errorLogPath,
    'alwaysIncludePattern': true,
    'pattern': '-yyyy-MM-dd.log'
  }, {
    'category': 'debug',
    'type': 'dateFile',
    'filename': debugLogPath,
    'alwaysIncludePattern': true,
    'pattern': '-yyyy-MM-dd.log'
  }, {
    'category': 'info',
    'type': 'dateFile',
    'filename': infoLogPath,
    'alwaysIncludePattern': true,
    'pattern': '-yyyy-MM-dd.log'
  }, {
    'category': 'app',
    'type': 'dateFile',
    'filename': appLogPath,
    'alwaysIncludePattern': true,
    'pattern': '-yyyy-MM-dd.log'
  }],
  'levels': {
    'app': 'ALL',
    'info': 'ALL',
    'error': 'ERROR',
    'debug': 'ALL'
  }
};
