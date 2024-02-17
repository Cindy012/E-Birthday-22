import { useEffect, useState } from 'react';

import Quiz from '../ts/quiz';
import { Question } from '../ts/question';
import { quizString } from '../ts/quizString';
import QuestionComponent from '../components/questionComponent.tsx';


function QuizPage() {
    const [quiz] = useState<Quiz>(initializeQuiz());
    const [currentQuestion, setCurrentQuestion] = useState<Question>(quiz.getCurrentQuestionData());
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');

    function initializeQuiz(): Quiz {
        const quiz = new Quiz();
        const quizData = JSON.parse(quizString);
        for (const questionId in quizData) {
          const questionData = quizData[questionId];
          quiz.addQuestion(
            new Question(
              questionId,
              questionData.question,
              questionData.choices,
              questionData.correctAnswer,
              questionData.answerExplanations
            )
          );
        }
        return quiz;
    }

    return (
        <section className="container" id="quiz-container">
            <QuestionComponent id={currentQuestion.getId()} question={currentQuestion.getQuestion()} choices={currentQuestion.getChoices()} />
        </section>
    );
}

export default QuizPage;