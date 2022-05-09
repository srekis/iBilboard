import { createClient } from 'redis';

const client = createClient();

client.on('connect', (err) =>{
    if (err) console.log(err); // do something with error
    //console.log("Connected to redis");
})

client.on('error', (err) => console.log('Redis Client Error', err));

(async () => await client.connect())();

const getCount = () => {
    return client.get('count');
}

const incrementCount = (value) => {
    return client.incrBy('count', value);
}

const flushAll = () => {
    return client.flushAll();
}

export default {
    getCount,
    incrementCount,
    flushAll
}