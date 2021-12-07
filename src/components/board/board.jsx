import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import {
  QustionSection,
  QustionCount,
  Span,
  QustionText,
  AnswerSection,
  Button,
  Main,
} from './styled';
import { questions } from '../../data/questions';

function QuizBoard(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const toNextQuestion = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/result');
    }
  };

  return (
    <>
      <Main>
        <QustionSection>
          <QustionCount>
            <Span>Вопрос {currentQuestion + 1}</Span>/{questions.length}
          </QustionCount>
          <QustionText>{questions[currentQuestion].question}</QustionText>
        </QustionSection>
        <AnswerSection>
          {questions[currentQuestion].options.map((option, i) => (
            <Button key={i} onClick={() => toNextQuestion(option.isCorrect)}>
              {option.optionText}
            </Button>
          ))}
        </AnswerSection>
      </Main>
    </>
  );
}

export default QuizBoard;
