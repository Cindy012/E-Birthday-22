import React, { useEffect } from 'react';

import Quiz from './ts/quiz';
import { Question } from './ts/question';
import { quizString } from './ts/quizString';

import './assets/css/App.css';

function App() {
  const [quiz] = React.useState<Quiz>(getQuiz());

  function getQuiz() {
    const quiz = new Quiz();
    const quizData = JSON.parse(quizString);
    for (const questionId in quizData) {
      const questionData = quizData[questionId];
      quiz.addQuestion(
        new Question(
          questionId,
          questionData.question,
          questionData.answers,
          questionData.correctAnswer,
          questionData.answerExplanations
        )
      );
    }
    return quiz;
  }

  function startQuiz() {
    console.log('Quiz started');
    // setCurrentQuestion(quiz.getCurrentQuestion());
  }

  return (
    <>
      <section className="container" id="start-container">
        <h1>Hi, welcome to this page!</h1>
        <p>
          Today is your birthday! Voordat jij je birthday wishes mag bekijken
          moet je een kleine quiz ondergaan voor fun. <br/>&#40;Don&#39;t panic about
          the quiz, it is not a exam &#59;p&#41;
        </p>
        <h3>Are u ready?</h3>
        <button id="start-quiz-btn" onClick={startQuiz}>
          Start de Quiz
        </button>
      </section>
    </>
  );
}

export default App;