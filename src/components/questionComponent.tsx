import React from 'react';
import Choice from './choice';

interface IQuestionComponent {
    id: string;
    question: string;
    choices: string[];
}

const QuestionComponent:React.FC<IQuestionComponent> = ({id, question, choices}) => {
    function getChoices():JSX.Element[] {
        return choices.map((choice, index) => {
            return <Choice
                id={index}
                value={choice}
            />
        });
    };

  return (
    <div>
        <h3 id='question'>{id}: {question}</h3>
        <div id='choices'>
            {getChoices()}
        </div>
    </div>
  );
}

export default QuestionComponent;
