const config = require("../config/app")

const redis = require('redis')

//const client = createClient();
// const client = redis.createClient({
//     host: config.redisHost,
//     port: config.redisPort
// })

// client.on("connect", function () {
//     console.log("You are now connected");
// });


module.exports = {

    getCount: () => {
        return 10;
    },

    incrementCount: (value) => {
        let currentCount = this.getCount();
        let newCount = currentCount + value;

        // client.set('count', newCount, (err, reply) => {
        // });
    }
};