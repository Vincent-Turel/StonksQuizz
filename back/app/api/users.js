const utils = require("./utils");

let dataProvider;

let handleGetRequest = (req, res) => {
    utils.wrapRequest(res, () => {
        let rslt = dataProvider.user.getUsers();
        return res.status(200).json(rslt);
    });
};

let handlePostRequest = (req, res) => {
    utils.wrapRequest(res, () => {
        let rslt = dataProvider.user.addUser(req.body);
        return res.status(200).json(rslt);
    });
};

let handleUpdateScoresRequest = (req, res) => {
    utils.wrapRequest(res, () => {
        let id = Number(req.params.id);

        let rslt = dataProvider.user.updateUserData(id, req.body);
        return res.status(200).json(rslt);
    });
};

let deleteUserRequest = (req, res) => {
    utils.wrapRequest(res, () => {
        let id = Number(req.params.id);

        return res.status(200).json(dataProvider.user.deleteUser(id));
    });
};

module.exports = (provider) => {
    dataProvider = provider;

    return {
        post: {
            handler: handlePostRequest,
        },
        get: {
            handler: handleGetRequest,
        },
        put: {
            handler: handleUpdateScoresRequest,
        },
        delete: {
            handler: deleteUserRequest,
        },
    };
};
