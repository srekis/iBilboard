require('dotenv').config()

module.exports = {
    logFilePath: process.env.LOG_FILE || './storage/log.txt',
    port: process.env.PORT || 5000,

    redisPort: process.env.REDIS_PORT || 6397,
    redisHost: process.env.REDIS_HOST | 'localhost'
}