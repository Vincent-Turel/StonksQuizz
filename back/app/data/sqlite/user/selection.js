const getUsersText =
    "SELECT \
    id, \
    first_name, \
    last_name, \
    contrast, \
    text_size, \
    click_tolerance, \
    brightness, \
    click_confirmation, \
    score, \
    creation_score, \
    finish_score \
FROM users";

let getUsersRequest;

const initRequests = (db) => {
    getUsersRequest = db.prepare(getUsersText);
};

const intToBool = (v) => {
    return v == 1;
};

const prepareUserFromDb = (user) => {
    return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        contrast: user.contrast,
        textSize: user.text_size,
        clickTolerance: user.click_tolerance,
        brightness: user.brightness,
        clickConfirmation: intToBool(user.click_confirmation),
        score: user.score,
        creationScore: user.creation_score,
        finishScore: user.finish_score,
    };
};

const getUsersFromDb = () => {
    return getUsersRequest.all();
};

const getUsers = () => {
    return getUsersFromDb().map(prepareUserFromDb);
};

module.exports = (db) => {
    initRequests(db);

    return { getUsers };
};
