let options = {};

if (process.env.NODE_ENV === 'test') {
    options = {
        path: '.env.test',
        override: true
    }
}

import dotevn from 'dotenv'

dotevn.config(options)

export default {
    logFilePath: process.env.LOG_FILE || './storage/log.txt',
    port: process.env.PORT || 5000,
    appUrl: process.env.APP_URL || 'http://localhost:5000',


    redisPort: process.env.REDIS_PORT || 6397,
    redisHost: process.env.REDIS_HOST || 'localhost',
}
