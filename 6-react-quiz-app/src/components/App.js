import React, { useState, useEffect } from 'react';

import data from '../data.json';

const App = () => {
  const [questions, setQuestions] = useState(data.questions);
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[index]
  );
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (index === questions.length) {
      setFinished(true);
    }
    setCurrentQuestion(questions[index]);
  }, [questions, index]);

  const handleClick = isCorrect => {
    setIndex(index => index + 1);

    if (isCorrect) {
      setScore(score => score + 1);
    }
  };

  if (finished) {
    return (
      <div className="app">
        <div className="score-section">
          You scored {score} out of {questions.length} questions
        </div>
      </div>
    );
  } else {
    const { questionText, answerOptions } = currentQuestion;

    return (
      <div className="app">
        <div className="question-section">
          <div className="question-count">
            <span>Question {index + 1} /</span> {questions.length}
          </div>
          <div className="question-text">{questionText}</div>
        </div>
        <div className="answer-section">
          {answerOptions.map(({ answerText, isCorrect }, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(isCorrect)}
              >
                {answerText}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
};

export default App;
