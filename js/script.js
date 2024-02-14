// imports
import Quiz from './quiz.js';
import Question from './question.js';

// constants
const startContainer = $('#start-container');
const startQuizBtn = $('#start-quiz-btn');
const quizContainer = $('#quiz-container');
const questionContainer = $('#question-container');
const quizFilePath = '../json/quiz.json';
const checkAnswerBtn = $('#check-answer');


let quiz = null;

$(document).ready(function() {
    initializeQuiz();
    startQuizBtn.click(function() {
        startQuiz();
    });
    checkAnswerBtn.click(function() {
        checkAnswer();
    });
});

function initializeQuiz() {
    quiz = new Quiz();

    fetch(quizFilePath)
        .then(response => response.json())
        .then(data => {
            Object.entries(data).forEach((q) => {
                const [key, value] = q;
                quiz.addQuestion(new Question(key, value.question, value.answers, value.correctAnswer, value.answerExplanation));
                // console.log(`${key}: ${value.question}`);
              });
        })
        .catch(error => {
            console.error('Error loading the quiz:', error);
        });
}

function startQuiz() {
    startContainer.hide();
    quizContainer.show();
    showQuestion(quiz);
}

function checkAnswer(answer) {
    console.log('checking answer');
    let result = quiz.isAnswerCorrect(answer);
    if (result) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

function showQuestion(quiz) {
    let currentQuestion = quiz.getCurrentQuestion();
    let possibleAnswers = quiz.getPossibleAnswers();
    let possibleAnswersHtml = getPossibleAnswersInHtml(possibleAnswers);

    questionContainer.html(
        `
        <h2 id="question">${currentQuestion.getQuestion()}</h2>
        ${possibleAnswersHtml}
        `
    );
};

function getPossibleAnswersInHtml(possibleAnswers) {
    let possibleAnswersHtml = '<div id="answers-container">';
    possibleAnswers.forEach((a, index) => {
        possibleAnswersHtml += `<button id=answer-${index}>${a}</button>`;
    });

    return possibleAnswersHtml;
}