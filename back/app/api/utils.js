const wrapRequest = (res, cb) => {
    try {
        cb();
    } catch (err) {
        res.status(500).send(err.message);
        throw err;
    }
};

module.exports.wrapRequest = wrapRequest;
