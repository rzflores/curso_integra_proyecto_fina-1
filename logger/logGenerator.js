const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf } = format;
const fs = require('fs');

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});


const logsDir = 'logs';
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename:  `${logsDir}/log.txt` })
  ]
});



module.exports = logger;
