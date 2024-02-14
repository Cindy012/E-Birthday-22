export default class Quiz {
    #questions;
    #currentQuestionIndex;

    constructor() {
        this.#questions = [];
        this.#currentQuestionIndex = 0;
    }

    addQuestion(question) {
        this.#questions.push(question);
    }

    getCurrentQuestion() {
        return this.#questions[this.#currentQuestionIndex];
    }

    isAnswerCorrect(givenAnswer) {
        return this.getCurrentQuestion().isCorrectAnswer(givenAnswer);
    }

    getPossibleAnswers() {
        return this.getCurrentQuestion().getAnswers();
    }

    nextQuestion() {
        updateCurrentQuestionIndex();
    }

    updateCurrentQuestionIndex() {
        this.#currentQuestionIndex++;
    }

    isQuizFinished() {
        return this.#currentQuestionIndex >= this.#questions.length;
    }
}