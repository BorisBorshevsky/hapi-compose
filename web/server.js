'use strict';
const Hapi = require('hapi');
const Routes = require('./routes');
const Config = require("./config/config")
require('hapi-bluebird');

const server = new Hapi.Server();

server.connection(Config.server);
server.route(Routes.endpoints);


server.start().then(() => {
    console.log("server started")
}).catch((err) => {
    console.log("error starting server: ", err)
});
