import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setScoreActionCreator } from '../../store/actionCreators/actionCreators';

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
  const [score, setScore] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(true);
    } else {
      setScore(false);
    }
    dispatch(setScoreActionCreator(isCorrect));
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else if (nextQuestion === questions.length) {
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
