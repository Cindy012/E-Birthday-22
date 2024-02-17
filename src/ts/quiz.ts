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

  getCurrentQuestion(): string {
    return this.#questions[this.#currentQuestionIndex].getQuestion();
  }

  getCurrentQuestionData(): Question {
    return this.#questions[this.#currentQuestionIndex];
  }

  isAnswerCorrect(givenAnswer: number): boolean {
    return this.getCurrentQuestionData().isChoiceCorrect(givenAnswer);
  }

  getChoices(): string[] {
    return this.getCurrentQuestionData().getChoices();
  }

  #updateCurrentQuestionIndex() {
    this.#currentQuestionIndex++;
  }

  nextQuestion() {
    this.#updateCurrentQuestionIndex();
  }

  isQuizFinished(): boolean {
    return this.#currentQuestionIndex + 1 >= this.#questions.length;
  }
}