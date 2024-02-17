import React from 'react';

interface IChoice {
  id: number;
  value: string;
  isChoiceCorrect: (choiceId: number) => void;
}

const Choice:React.FC<IChoice> = ({id, value, isChoiceCorrect}) => {
  return (
    <button className="choice" onClick={() => isChoiceCorrect(id)}>{id+1}: {value}</button>
  );
}

export default Choice;
