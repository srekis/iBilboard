import redis from '../services/RedisService'

/**************************************************************************************/
/* TESTS
/**************************************************************************************/
test('test increment and get count', async () => {

    await redis.flushAll();

    expect(await redis.getCount()).toBe(null);

    // first call should be null
    let count = await redis.getCount();
    expect(count).toBe(null);

    // increment by 5 => should be 5
    await redis.incrementCount(5);
    count = await redis.getCount();
    expect(count).toBe("5");

    // increment by 3 => should be 8
    await redis.incrementCount(3);
    count = await redis.getCount();
    expect(count).toBe("8");

});


