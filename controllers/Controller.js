const fileLogger = require('../services/FileLoggerService')
const redis = require('../services/RedisService')

const trackBody = ((req, res) => {

    let data = req.body;
    let hasCount = data.hasOwnProperty('count')

    fileLogger.logRequestData(data);

    if (hasCount) {
        redis.incrementCount(data.count);
    }

    res.end()
})

const getCount = ((req, res) => {
    res.send(redis.getCount())
})

module.exports = {
    trackBody,
    getCount
}