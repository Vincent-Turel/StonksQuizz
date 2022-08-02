const dummyQuestions = [
    {
        label: "Quatre plus trois font sept",
        isClosed: true,
        explanation: "Et oui, les mathématiques, c'est compliqué !",
        answers: [
            {
                isCorrect: true,
            },
            {
                isCorrect: false,
            },
        ],
    },
    {
        label: "Jean Gabin a joué dans...",
        isClosed: false,
        explanation:
            "Le film est sorti en 1937 et il s'appelait La Grande Illusion",
        answers: [
            {
                value: "Les Tuches II",
                isCorrect: false,
            },
            {
                value: "La Grande Illusion",
                isCorrect: true,
            },
            {
                value: "Mission Impossible",
                isCorrect: false,
            },
            {
                value: "Bienvenue chez les Ch'tis",
                isCorrect: false,
            },
        ],
    },
];

const dummyQuizzes = [
    {
        name: "Les mathématiques",
        questions: dummyQuestions,
    },
];

const getQuestions = () => dummyQuestions;
const getQuiz = () => dummyQuizzes;

module.exports.getQuestions = {
    getQuestions: getQuestions,
    getQuiz: getQuiz,
};
