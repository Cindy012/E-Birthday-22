export class Question {
  #id: string;
  #question: string;
  #choices: string[];
  #correctAnswer: number;
  #answerExplanations: string[];

  constructor(id: string, question: string, choices: string[], correctAnswer: number, answerExplanations: string[]) {
    this.#id = id
    this.#question = question
    this.#choices = choices
    this.#answerExplanations = answerExplanations
    this.#correctAnswer = correctAnswer
  }

  isChoiceCorrect(givenAnswer: number): boolean {
    return this.#correctAnswer === givenAnswer;
  }

  getId(): string {
    return this.#id;
  }

  getQuestion(): string {
    return this.#question.toString();
  }

  getChoices(): string[] {
    return this.#choices;
  }

  getCorrectAnswer(): number {
    return this.#correctAnswer;
  }

  getAnswerExplanationByAnswerId(id: number): string {
    return this.#answerExplanations[id];
  }
}