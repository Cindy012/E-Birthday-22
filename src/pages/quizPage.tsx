import { useState } from 'react';

import Quiz from '../ts/quiz';
import { Question } from '../ts/question';
import { quizString } from '../ts/quizString';
import QuestionComponent from '../components/questionComponent.tsx';

interface QuizPageProps {
    endQuiz: () => void;
}

const QuizPage:React.FC<QuizPageProps> = ({endQuiz}) => {
    const [quiz] = useState<Quiz>(initializeQuiz());
    const [currentQuestion, setCurrentQuestion] = useState<Question>(quiz.getCurrentQuestionData());

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

    const isChoiceCorrect= (choiceId: number) => {
        let result = currentQuestion.isChoiceCorrect(choiceId);
        window.alert(currentQuestion.getAnswerExplanationByAnswerId(choiceId));

        if (result) {
            setNextQuestion();
        }
    };

    function setNextQuestion(): void {
        console.log(quiz.isQuizFinished());
        if (quiz.isQuizFinished()) {
            endQuiz();
            return;
        }
        quiz.nextQuestion();
        setCurrentQuestion(quiz.getCurrentQuestionData());
    }

    return (
        <section className="container" id="quiz-container">
            <QuestionComponent
                id={currentQuestion.getId()}
                question={currentQuestion.getQuestion()}
                choices={currentQuestion.getChoices()}
                isChoiceCorrect={isChoiceCorrect}
            />
        </section>
    );
}

export default QuizPage;