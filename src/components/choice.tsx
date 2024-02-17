import React from 'react';

interface IChoice {
  id: number;
  value: string;
}

const Choice:React.FC<IChoice> = ({id, value}) => {
  return (
    <button className="choice-btn" onClick={() => console.log(value)}>{id+1}: {value}</button>
  );
}

export default Choice;
