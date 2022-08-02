const logger = require("./logger");

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

let api;
let dataProvider;

const measureTimeInMs = (cb) => {
    let start = process.hrtime();
    cb();
    let elapsed = process.hrtime(start)[1] / 1000000;
    start = process.hrtime();

    return elapsed;
};

let logRequest = (req, _res, next) => {
    let method = req.method;
    let path = req.path;
    let time = measureTimeInMs(next);

    logger.log(method + " request to " + path + " handled in " + time + "ms");
};

let start = (callback) => {
    const app = express();
    app.disable("x-powered-by");
    app.use(cors());
    app.use(bodyParser.json({}));
    app.use(logRequest);
    app.use("/api", api);
    app.use("*", (_, res) => res.status(404).end());

    const port = 9428;
    return app.listen(9428, callback(port));
};

module.exports = (provider) => {
    dataProvider = provider;
    api = require("./api")(dataProvider);

    return {
        start: start,
    };
};
