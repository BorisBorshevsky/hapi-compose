const redis = require("redis");
const redisClient = require("../lib/redis").client;

class counter {
    static increment(){
        return redisClient.incrAsync("test")
    }

}

module.exports = counter