const quizText =
    "INSERT INTO quizzes (name, theme, img_url) VALUES ( ?, ?, ? );";
const questionText =
    "INSERT INTO questions ( \
    quiz, label, isclosed, explanation \
) VALUES ( \
    ?, ?, ?, ? \
);";
const answerText =
    "INSERT INTO answers (question, value, iscorrect) VALUES ( ?, ?, ? );";

let quizRequest;
let questionRequest;
let answerRequest;

let deleteQuiz;
let assert;

const initRequests = (db) => {
    quizRequest = db.prepare(quizText);
    questionRequest = db.prepare(questionText);
    answerRequest = db.prepare(answerText);
};

const initSideFunctions = (typechecking, deletionModule) => {
    deleteQuiz = deletionModule.deleteQuiz;
    assert = typechecking.assert;
};

const boolToInt = (b) => {
    if (b) {
        return 1;
    } else {
        return 0;
    }
};

const validateAnswer = (answer) => {
    let value = answer.value;

    // Value can be null (when the question is closed) or must be a string
    if (value != null) {
        assert(answer).withAttribute("value").isType("string");
    }

    assert(answer).withAttribute("isCorrect").isType("boolean");
    let isCorrect = boolToInt(answer.isCorrect);

    return { value, isCorrect };
};

const validateQuestion = (question) => {
    let label = question.label;
    let isClosed = question.isClosed;
    let explanation = question.explanation;

    assert(question).withAttribute("label").isType("string");
    assert(question).withAttribute("isClosed").isType("boolean");
    assert(question).withAttribute("explanation").isType("string");

    isClosed = boolToInt(isClosed);

    let answers = question.answers.map(validateAnswer);

    return {
        label,
        isClosed,
        explanation,
        answers,
    };
};

const validateQuiz = (quiz) => {
    let name = quiz.name;
    let theme = quiz.theme;
    let img_url = quiz.imgUrl;

    assert(quiz).withAttribute("name").isType("string");
    assert(quiz).withAttribute("theme").isType("number");
    assert(quiz).withAttribute("imgUrl").isType("string");

    let questions = quiz.questions.map(validateQuestion);

    return { name, theme, questions, img_url };
};

const addAnswer = (answer, questionId) => {
    answerRequest.run(questionId, answer.value, answer.isCorrect);
};

const addQuestion = (question, quizId) => {
    let questionId = questionRequest.run(
        quizId,
        question.label,
        question.isClosed,
        question.explanation
    ).lastInsertRowid;

    question.answers.forEach((answer) => addAnswer(answer, questionId));
};

const addQuiz = (quiz) => {
    let validatedQuiz = validateQuiz(quiz);

    let quizId = quizRequest.run(
        validatedQuiz.name,
        validatedQuiz.theme,
        validatedQuiz.img_url
    ).lastInsertRowid;

    validatedQuiz.questions.forEach((question) =>
        addQuestion(question, quizId)
    );
};

const updateQuiz = (id, quiz) => {
    assert(id).isType("number");

    deleteQuiz(id);
    addQuiz(quiz);
};

module.exports = (db, typechecking, deletion) => {
    initRequests(db);
    initSideFunctions(typechecking, deletion);

    return { addQuiz, updateQuiz };
};
