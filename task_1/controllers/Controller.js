import fileLogger from '../services/FileLoggerService.js'
import redis from '../services/RedisService.js'

const trackBody = (req, res) => {

    const data = req.body;
    const hasCount = data.hasOwnProperty('count')

    fileLogger.logRequestData(data);

    if (hasCount) {
        redis.incrementCount(data.count);
    }

    res.sendStatus(200)
}

const getCount = async (req, res) => {
    // TODO: why here need to be await again if it is called in redis service??? no idea :-(
    const redisCount = await redis.getCount();

    res.json({count: redisCount});
}

export default {
    trackBody,
    getCount
}