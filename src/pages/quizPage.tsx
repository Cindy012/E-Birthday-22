import { useEffect, useState } from 'react';

import Quiz from '../ts/quiz';
import { Question } from '../ts/question';
import { quizString } from '../ts/quizString';
import QuestionComponent from '../components/questionComponent.tsx';
import QuestionAnimation from '../components/questionAnimation.tsx';

interface QuizPageProps {
    endQuiz: () => void;
}

const QuizPage:React.FC<QuizPageProps> = ({endQuiz}) => {
    const [quiz] = useState<Quiz>(initializeQuiz());
    const [currentQuestion, setCurrentQuestion] = useState<Question>(quiz.getCurrentQuestionData());
    const [playAnimation, setPlayAnimation] = useState<boolean>(false);

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
        if (quiz.isQuizFinished()) {
            endQuiz();
            alert('Yey! You have finished the quiz! Let\'s go to the next page!');
            return;
        }
        playTheAnimation();
        quiz.nextQuestion();
        setCurrentQuestion(quiz.getCurrentQuestionData());
    }

    function playTheAnimation() {
        setPlayAnimation(true);
        setTimeout(() => {
            setPlayAnimation(false);
        }, 3000);
    }

    return (
        playAnimation ? <QuestionAnimation questionIndex={currentQuestion.getId()}/> :
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