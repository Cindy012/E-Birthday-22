import { Question } from './question';

export default class Quiz {
  #questions: Question[];
  #currentQuestionIndex: number;

  constructor() {
    this.#questions = [];
    this.#currentQuestionIndex = 0;
  }

  addQuestion(question: Question) {
    this.#questions.push(question);
  }

  getCurrentQuestion() {
    return this.#questions[this.#currentQuestionIndex].getQuestion();
  }

  getCurrentQuestionData() {
    return this.#questions[this.#currentQuestionIndex];
  }

  isAnswerCorrect(givenAnswer: number) {
    return this.getCurrentQuestionData().isAnswerCorrect(givenAnswer);
  }

  getPossibleAnswers() {
    return this.getCurrentQuestionData().getAnswers();
  }

  #updateCurrentQuestionIndex() {
    this.#currentQuestionIndex++;
  }

  nextQuestion() {
    this.#updateCurrentQuestionIndex();
  }

  isQuizFinished() {
    return this.#currentQuestionIndex >= this.#questions.length;
  }
}