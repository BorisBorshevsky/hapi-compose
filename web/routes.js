const Counter = require('./controllers/counter');

// API Server Endpoints
exports.endpoints = [
    {method: 'GET', path: '/test', config: Counter.incr}
    // {method: 'GET', path: '/{somethingss*}', config: Static.get},
    // {method: 'POST', path: '/user', config: User.create},
    // {method: 'GET', path: '/user', config: User.getAll},
    // {method: 'GET', path: '/user/{userId}', config: User.getOne},
    // {method: 'PUT', path: '/user/{userId}', config: User.update},
    // {method: 'DELETE', path: '/user/{userId}', config: User.remove},
    // {method: 'DELETE', path: '/user', config: User.removeAll}
];