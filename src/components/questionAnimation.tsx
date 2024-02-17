import React from 'react';

interface QuestionAnimationProps {
    questionIndex: string;
}

const QuestionAnimation:React.FC<QuestionAnimationProps> = ({questionIndex}) => {
  return (
    <div className="text-animation-container">
      <span className="text-beam">{questionIndex}</span>
    </div>
  );
};

export default QuestionAnimation;