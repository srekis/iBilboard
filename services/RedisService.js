import {createClient} from 'redis';

const client = createClient();

client.on('connect', (err) => {
    if (err) console.log(err); // do something with error
})

// method to get current value in redis DB
const getCount = async () => {
    try {
        await client.connect();

        const count = await client.get('count');

        await client.disconnect();

        return count;
    } catch (err) {
        console.log(err);
    }
}

// method to increment 'count' key in redis DB
const incrementCount = async (value) => {
    try {
        await client.connect();

        await client.incrBy('count', value);

        await client.disconnect();

    } catch (err) {
        console.log(err);
    }
}

// method to remove all keys in redis
const flushAll = async () => {
    try {
        await client.connect();

        await client.flushAll();

        await client.disconnect();

    } catch (err) {
        console.log(err);
    }
}

export default {
    getCount,
    incrementCount,
    flushAll
}