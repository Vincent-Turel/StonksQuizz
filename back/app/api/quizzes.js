const utils = require("./utils");

let dataProvider;

const handleGetRequest = (req, res) => {
    utils.wrapRequest(res, () => {
        res.status(200).json(dataProvider.game.getQuizzes());
    });
};

const handlePostRequest = (req, res) => {
    utils.wrapRequest(res, () => {
        res.status(200).json(dataProvider.game.addQuiz(req.body));
    });
};

const handleDeleteRequest = (req, res) => {
    utils.wrapRequest(res, () => {
        let id = Number(req.params.id);
        res.status(200).json(dataProvider.game.deleteQuiz(id));
    });
};

const handlePostIdRequest = (req, res) => {
    utils.wrapRequest(res, () => {
        let id = Number(req.params.id);
        res.status(200).json(dataProvider.game.updateQuiz(id, req.body));
    });
};

module.exports = (provider) => {
    dataProvider = provider;

    return {
        get: { handler: handleGetRequest },
        post: { handler: handlePostRequest },
        postId: { handler: handlePostIdRequest },
        delete: { handler: handleDeleteRequest },
    };
};
