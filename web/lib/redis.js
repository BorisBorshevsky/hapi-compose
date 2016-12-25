const redis = require('redis');
const bluebird = require('bluebird');
const redisConfig = require('../config/config').redis

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

module.exports = {
    client: redis.createClient(redisConfig)
};
