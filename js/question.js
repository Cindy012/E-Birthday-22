export default class Question {
    constructor(id, question, answers, correctAnswer, answerExplanation) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.answerExplanation = answerExplanation;
        this.correctAnswer = correctAnswer;
    }

    isCorrect(givenAnswer) {
        return this.correctAnswer === givenAnswer;
    }

    getQuestion() {
        return this.question.toString();
    }

    getAnswers() {
        return this.answers;
    }

    getCorrectAnswer() {
        return this.correctAnswer;
    }
}