const Router = require("express");
const logger = require("../logger");

let dataProvider;
let questions;
let quizzes;
let themes;
let user;

const router = new Router();

let setupRouter = () => {
    router.use(Router.json());
    router.use(Router.urlencoded({ extended: true }));

    router.get("/status", (req, res) => res.status(200).json("ok"));
    router.get("/questions", questions.handler);
    router.get("/quizzes", quizzes.get.handler);
    router.get("/themes", themes.handler);
    router.get("/users", users.get.handler);

    router.post("/users", users.post.handler);
    router.post("/quizzes", quizzes.post.handler);
    router.post("/quizzes/:id", quizzes.postId.handler);

    router.put("/users/:id", users.put.handler);

    router.delete("/users/:id", users.delete.handler);
    router.delete("/quizzes/:id", quizzes.delete.handler);
};

module.exports = (provider) => {
    dataProvider = provider;

    questions = require("./questions")(dataProvider);
    quizzes = require("./quizzes")(dataProvider);
    themes = require("./themes")(dataProvider);
    users = require("./users")(dataProvider);

    setupRouter();

    return router;
};
