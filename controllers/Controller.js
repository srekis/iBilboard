import fileLogger from '../services/FileLoggerService.js'
import redis from'../services/RedisService.js'

const trackBody = async (req, res) => {

    const data = req.body;
    const hasCount = data.hasOwnProperty('count')

    fileLogger.logRequestData(data);

    if (hasCount) {
        await redis.incrementCount(data.count);
    }

    res.sendStatus(200)
}

const getCount = async (req, res) => {
    const count  = await redis.getCount();

    res.send(JSON.stringify(count));
}

export default {
    trackBody,
    getCount
}