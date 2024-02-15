export class Question {
  #id: string;
  #question: string;
  #answers: string[];
  #correctAnswer: number;
  #answerExplanations: string[];

  constructor(id: string, question: string, answers: string[], correctAnswer: number, answerExplanations: string[]) {
    this.#id = id
    this.#question = question
    this.#answers = answers
    this.#answerExplanations = answerExplanations
    this.#correctAnswer = correctAnswer
  }

  isAnswerCorrect(givenAnswer: number) {
    return this.#correctAnswer === givenAnswer;
  }

  getId() {
    return this.#id;
  }

  getQuestion() {
    return this.#question.toString();
  }

  getAnswers() {
    return this.#answers;
  }

  getCorrectAnswer() {
    return this.#correctAnswer;
  }

  getAnswerExplanationByAnswerId(id: number) {
    return this.#answerExplanations[id];
  }
}