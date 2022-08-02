const utils = require("./utils");

let dataProvider;

let handleRequest = (req, res) => {
    utils.wrapRequest(res, () => {
        res.status(200).json(dataProvider.game.getThemes());
    });
};

module.exports = (provider) => {
    dataProvider = provider;

    return {
        handler: handleRequest,
    };
};
