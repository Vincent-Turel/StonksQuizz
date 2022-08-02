module.exports = (db, typechecking) => {
    let selection = require("./selection")(db);
    let deletion = require("./deletion")(db);
    let insertion = require("./insertion")(db, typechecking, deletion);

    return Object.assign(selection, insertion, deletion);
};
