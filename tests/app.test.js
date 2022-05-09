import request from 'supertest'
import config from '../config/app.js'
import redis from '../services/RedisService.js'
import fs from 'fs'
import app from '../app.js'

const {dataWithoutCount, dataWithCount} = require('./test.data.js');

test("should response with 404 for not known route", async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(404);
})

test("should response with 200 and save data to file", async () => {
    const response = await request(app).post('/track').send(dataWithoutCount);
    expect(response.statusCode).toBe(200);

    // should create a file, content is tested in FileLoggerService.test.js
    const fileExists = fs.existsSync(config.logFilePath)
    expect(fileExists).toBe(true);
})

test("should response with 200, save data to file and increment count in redis", async () => {

    await redis.flushAll();

    const response = await request(app).post('/track').send(dataWithCount);
    expect(response.statusCode).toBe(200);

    // should create a file, content is tested in FileLoggerService.test.js
    const fileExists = fs.existsSync(config.logFilePath)
    expect(fileExists).toBe(true);

    const count = await redis.getCount();
    expect(count).toBe(dataWithCount.count);
})