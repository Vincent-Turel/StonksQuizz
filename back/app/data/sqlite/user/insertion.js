const addUserText =
    "INSERT INTO users ( \
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
) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";

const updateScoresText =
    "UPDATE users SET \
    score = score + ?, \
    creation_score = score + ?, \
    finish_score = finish_score + ? \
WHERE id = ?;";

const createUpdateSettingRequest = (field) => {
    return "UPDATE users SET " + field + " = ? WHERE id = ?;";
};

const updateFirstNameText = createUpdateSettingRequest("first_name");
const updateLastNameText = createUpdateSettingRequest("last_name");
const updateContrastText = createUpdateSettingRequest("contrast");
const updateTextSizeText = createUpdateSettingRequest("text_size");
const updateClickToleranceText = createUpdateSettingRequest("click_tolerance");
const updateBrightnessText = createUpdateSettingRequest("brightness");
const updateClickConfirmationText = createUpdateSettingRequest(
    "click_confirmation"
);

let addUserRequest;

let updateFirstNameRequest;
let updateLastNameRequest;

let updateScoresRequest;
let updateContrastRequest;
let updateTextSizeRequest;
let updateClickToleranceRequest;
let updateBrightnessRequest;
let updateClickConfirmationRequest;

let assert;

const initRequests = (db) => {
    addUserRequest = db.prepare(addUserText);
    updateScoresRequest = db.prepare(updateScoresText);

    updateFirstNameRequest = db.prepare(updateFirstNameText);
    updateLastNameRequest = db.prepare(updateLastNameText);

    updateContrastRequest = db.prepare(updateContrastText);
    updateTextSizeRequest = db.prepare(updateTextSizeText);
    updateClickToleranceRequest = db.prepare(updateClickToleranceText);
    updateBrightnessRequest = db.prepare(updateBrightnessText);
    updateClickConfirmationRequest = db.prepare(updateClickConfirmationText);
};

const initSideFunctions = (typechecking) => {
    assert = typechecking.assert;
};

const boolToInt = (val) => {
    if (val) {
        return 1;
    } else {
        return 0;
    }
};

const validateUserProfile = (user) => {
    assert(user).withAttribute("firstName").isType("string");
    assert(user).withAttribute("lastName").isType("string");

    assert(user).withAttribute("contrast").isType("number");
    assert(user).withAttribute("textSize").isType("number");
    assert(user).withAttribute("clickTolerance").isType("number");
    assert(user).withAttribute("brightness").isType("number");
    assert(user).withAttribute("clickConfirmation").isType("boolean");

    assert(user).withAttribute("score").isType("number");
    assert(user).withAttribute("creationScore").isType("number");
    assert(user).withAttribute("finishScore").isType("number");

    user.clickConfirmation = boolToInt(user.clickConfirmation);
};

const addUser = (user) => {
    validateUserProfile(user);

    let userId = addUserRequest.run(
        user.firstName,
        user.lastName,
        user.contrast,
        user.textSize,
        user.clickTolerance,
        user.brightness,
        user.clickConfirmation,
        user.score,
        user.creationScore,
        user.finishScore
    ).lastInsertRowid;

    return { id: userId };
};

const orZero = (value) => {
    if (!value) {
        return 0;
    } else {
        return value;
    }
};

const containsScoreUpdates = (request) => {
    return (
        typeof request.scoreDelta !== "undefined" ||
        typeof request.creationScoreDelta !== "undefined" ||
        typeof request.finishScoreDelta !== "undefined"
    );
};

const validateScoreUpdates = (deltas) => {
    deltas.scoreDelta = orZero(deltas.scoreDelta);
    deltas.creationScoreDelta = orZero(deltas.creationScoreDelta);
    deltas.finishScoreDelta = orZero(deltas.finishScoreDelta);

    assert(deltas).withAttribute("scoreDelta").isType("number");
    assert(deltas).withAttribute("creationScoreDelta").isType("number");
    assert(deltas).withAttribute("finishScoreDelta").isType("number");
};

const validateSettingUpdate = (data) => {
    const assertTypeOrUndefined = (attr, type) => {
        if (data[attr] != undefined) {
            assert(data).withAttribute(attr).isType(type);
        }
    };

    assertTypeOrUndefined("contrast", "number");
    assertTypeOrUndefined("textSize", "number");
    assertTypeOrUndefined("clickTolerance", "number");
    assertTypeOrUndefined("brightness", "number");
    assertTypeOrUndefined("clickConfirmation", "boolean");

    data.clickConfirmation = boolToInt(data.clickConfirmation);
};

const runScoreUpdateRequest = (id, deltas) => {
    let rows = updateScoresRequest.run(
        deltas.scoreDelta,
        deltas.creationScoreDelta,
        deltas.finishScoreDelta,
        id
    ).changes;

    if (rows == 0) {
        throw new Error("User not found");
    }
};

const runSettingsUpdate = (id, data) => {
    const isDefined = (v) => {
        return typeof v !== "undefined";
    };

    const updateIfNecessary = (attr, request) => {
        if (isDefined(data[attr])) {
            let rows = request.run(data[attr], id).changes;

            if (rows == 0) {
                throw new Error("User not found");
            }
        }
    };

    updateIfNecessary("firstName", updateFirstNameRequest);
    updateIfNecessary("lastName", updateLastNameRequest);
    updateIfNecessary("contrast", updateContrastRequest);
    updateIfNecessary("textSize", updateTextSizeRequest);
    updateIfNecessary("clickTolerance", updateClickToleranceRequest);
    updateIfNecessary("brightness", updateBrightnessRequest);
    updateIfNecessary("clickConfirmation", updateClickConfirmationRequest);
};

const updateUserData = (id, data) => {
    assert(id).isType("number");

    if (containsScoreUpdates(data)) {
        validateScoreUpdates(id, data);
        runScoreUpdateRequest(id, data);
    }

    validateSettingUpdate(data);
    runSettingsUpdate(id, data);
};

module.exports = (db, typechecking) => {
    initRequests(db);
    initSideFunctions(typechecking);

    return { addUser, updateUserData };
};
