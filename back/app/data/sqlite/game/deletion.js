const deleteQuizText = "DELETE FROM quizzes WHERE id = ?;";
const deleteQuestionText = "DELETE FROM questions WHERE quiz = ?;";
const deleteAnswerText = "DELETE FROM answers WHERE question = ?;";

const selectQuestionsText = "SELECT id FROM questions WHERE quiz = ?;";

let deleteQuizRequest;
let deleteQuestionRequest;
let deleteAnswerRequest;

let selectQuestionsRequest;

const initRequests = (db) => {
    deleteQuizRequest = db.prepare(deleteQuizText);
    deleteQuestionRequest = db.prepare(deleteQuestionText);
    deleteAnswerRequest = db.prepare(deleteAnswerText);

    selectQuestionsRequest = db.prepare(selectQuestionsText);
};

const deleteAnswers = (id) => {
    deleteAnswerRequest.run(id);
};

const deleteQuestions = (id) => {
    let questions = selectQuestionsRequest.all(id);
    deleteQuestionRequest.run(id);
    questions.forEach((res) => deleteAnswers(res.id));
};

const deleteQuiz = (id) => {
    let rows = deleteQuizRequest.run(id).changes;

    if (rows == 0) {
        throw new Error("Quiz not found");
    }

    deleteQuestions(id);
};

module.exports = (db) => {
    initRequests(db);

    return { deleteQuiz };
};
