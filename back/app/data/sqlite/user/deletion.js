const deleteUserText = "DELETE FROM users WHERE id = ?;";

let deleteUserRequest;
let assert;

const initRequests = (db) => {
    deleteUserRequest = db.prepare(deleteUserText);
};

const initSideFunctions = (typechecking) => {
    assert = typechecking.assert;
};

const deleteUser = (id) => {
    assert(id).isType("number");

    let rows = deleteUserRequest.run(id).changes;

    if (rows == 0) {
        throw new Error("User not found");
    }
};

module.exports = (db, typechecking) => {
    initRequests(db);
    initSideFunctions(typechecking);

    return { deleteUser };
};
