const Boom = require('boom');
const counter = require('../models/counter');

exports.incr = {
    handler: (req, res) => {
        counter.increment()
            .then(val => res(val))
            .catch(err => res(Boom.serverUnavailable(err)))

    }
}