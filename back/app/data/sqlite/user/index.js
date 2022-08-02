module.exports = (db, typechecking) => {
    let selection = require("./selection")(db);
    let insertion = require("./insertion")(db, typechecking);
    let deletion = require("./deletion")(db, typechecking);

    return Object.assign(selection, insertion, deletion);
};
