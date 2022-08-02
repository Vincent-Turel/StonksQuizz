let db;

const themesText = "SELECT id, name, img_url FROM themes";
const specificQuizText =
    "SELECT id, name, img_url FROM quizzes WHERE theme = ?;";
const quizzesText = "SELECT id, name, img_url FROM quizzes";
const specificQuestionsText =
    "SELECT id, label, isclosed, explanation FROM questions WHERE quiz = ? ORDER by id ASC";
const questionText = "SELECT id, label, isclosed, explanation FROM questions";
const answersText =
    "SELECT value, iscorrect FROM answers WHERE question = ? ORDER BY id ASC";

let themesRequest;
let specificQuizRequest;
let quizzesRequest;
let specificQuestionsRequest;
let questionRequest;
let answersRequest;

const initRequests = (db) => {
    themesRequest = db.prepare(themesText);
    specificQuizRequest = db.prepare(specificQuizText);
    quizzesRequest = db.prepare(quizzesText);
    specificQuestionsRequest = db.prepare(specificQuestionsText);
    questionRequest = db.prepare(questionText);
    answersRequest = db.prepare(answersText);
};

const intToBool = (i) => {
    return i == 1;
};

const prepareAnswerFromDb = (rawAnswer) => {
    return {
        value: rawAnswer.value,
        isCorrect: intToBool(rawAnswer.iscorrect),
    };
};

const prepareQuestionFromDb = (rawQuestion, rawAnswers) => {
    return {
        label: rawQuestion.label,
        isClosed: intToBool(rawQuestion.isclosed),
        explanation: rawQuestion.explanation,
        answers: rawAnswers.map(prepareAnswerFromDb),
    };
};

const prepareQuizFromDb = (rawQuiz, questions) => {
    return {
        id: rawQuiz.id,
        name: rawQuiz.name,
        imgUrl: rawQuiz.img_url,
        questions: questions,
    };
};

const prepareThemeFromDb = (rawTheme, quizzes) => {
    return {
        name: rawTheme.name,
        imgUrl: rawTheme.img_url,
        id: rawTheme.id,
        quizzes: quizzes,
    };
};

const prepareAndAppendAnswer = (question) => {
    let answers = answersRequest.all(question.id);
    return prepareQuestionFromDb(question, answers);
};

const getQuestions = () => {
    return questionRequest.all().map(prepareAndAppendAnswer);
};

const getSpecificQuestions = (questionId) => {
    return specificQuestionsRequest.all(questionId);
};

const prepareAndAppendQuestions = (quiz) => {
    let questions = getSpecificQuestions(quiz.id).map(prepareAndAppendAnswer);
    return prepareQuizFromDb(quiz, questions);
};

const getQuizzes = () => {
    return quizzesRequest.all().map(prepareAndAppendQuestions);
};

const getSpecificQuizzes = (themeId) => {
    return specificQuizRequest.all(themeId);
};

const prepareAndAppendQuizzes = (theme) => {
    let quizzes = getSpecificQuizzes(theme.id).map(prepareAndAppendQuestions);
    return prepareThemeFromDb(theme, quizzes);
};

const getThemes = () => {
    return themesRequest.all().map(prepareAndAppendQuizzes);
};

module.exports = (database) => {
    db = database;
    initRequests(db);

    return {
        getQuestions: getQuestions,
        getQuizzes: getQuizzes,
        getThemes: getThemes,
    };
};
