import React from 'react';

interface IChoice {
  id: number;
  value: string;
  isChoiceCorrect: (choiceId: number) => void;
}

const Choice:React.FC<IChoice> = ({id, value, isChoiceCorrect}) => {
  return (
    <button className="choice" onClick={() => isChoiceCorrect(id)}>{value}</button>
  );
}

export default Choice;
