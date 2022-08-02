const db = require("better-sqlite3")("./sqlite3-db.db");
const typechecking = require("./typechecking");
const game = require("./game")(db, typechecking);
const user = require("./user")(db, typechecking);

module.exports.game = game;
module.exports.user = user;
