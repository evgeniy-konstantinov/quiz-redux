import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ShowScore } from './styled';
import { questions } from '../../data/questions';

function ResultBoard(props) {
  const score = useSelector((store) => {
    const { scoreReducer } = store;
    return scoreReducer.score;
  });

  const buttonText = useSelector((store) => {
    const { startButtonReducer } = store;
    return startButtonReducer.playerName;
  });

  return (
    <>
      <Link
        to="/resultsAll"
        style={{
          color: '#000',
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Таблица результатов
      </Link>
      <Link
        to="/"
        style={{
          color: '#000',
          fontSize: '20px',
          fontWeight: 700,
          marginLeft: '100px',
        }}
      >
        Пройти опрос заново
      </Link>
      <ShowScore>
        {buttonText}
        <br />
        <br /> Ваш счет {Number(score)} из {questions.length}
        <br />И это составляет:{' '}
        {Math.floor((score / questions.length) * 100) + '%'}
      </ShowScore>
    </>
  );
}

export default ResultBoard;
