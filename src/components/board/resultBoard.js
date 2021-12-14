import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ShowScore } from './styled';
import { questions } from '../../data/questions';
import { setScoreListActionCreator } from '../../store/actionCreators/actionCreators';

function ResultBoard(props) {
  const dispatch = useDispatch();

  const score = useSelector((store) => {
    const { scoreReducer } = store;
    // console.log(scoreReducer.score);
    return scoreReducer.score;
  });

  const playerName = useSelector((store) => {
    const { startButtonReducer } = store;
    return startButtonReducer.playerName;
  });

  let result = score.filter((el) => el === true);

  const toScoreList = () => {
    dispatch(setScoreListActionCreator(playerName, score));
  };

  return (
    <>
      <div>
        <Link
          to="/resultsAll"
          style={{
            color: '#000',
            fontSize: '20px',
            fontWeight: 700,
          }}
          onClick={toScoreList}
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
          {playerName}
          <br />
          <br /> Ваш счет {result.length} из {questions.length}
          <br />И это составляет:{' '}
          {Math.floor((result.length / questions.length) * 100) + '%'}
        </ShowScore>
      </div>
    </>
  );
}

export default ResultBoard;
