import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ResetScoreActionCreator } from '../store/actionCreators/actionCreators';

import { Block, MainResult, Div, P } from './board/styled';

function TableResults(props) {
  const dispatch = useDispatch();

  const score = useSelector((store) => {
    const { scoreReducer } = store;
    return scoreReducer.score;
  });

  const playerName = useSelector((store) => {
    const { startButtonReducer } = store;
    return startButtonReducer.playerName;
  });

  // let result = score.filter((el) => el === true);

  const res = useSelector((store) => {
    const { setScoreListReducer } = store;
    console.log(setScoreListReducer);
    return setScoreListReducer;
  });

  function resetScore(score) {
    dispatch(ResetScoreActionCreator(score));
  }
  return (
    <>
      <Block>
        <Link
          to="/"
          onClick={resetScore}
          style={{ height: '100px', padding: '50px' }}
        >
          Пройти опрос еще раз
        </Link>
        <br />
        <div>
          <MainResult>
            {res.map((el) => (
              <Div>
                <Link
                  to="/personalResult"
                  style={{
                    textDecoration: 'none',
                  }}
                  onClick={resetScore}
                >
                  <h1>{el.playerName}</h1>
                </Link>
                <P>
                  - правильных ответов:
                  {el.score.filter((el) => el === true).length}
                </P>
                <P>
                  - это состовляет
                  {Math.floor(
                    (el.score.filter((el) => el === true).length / 12) * 100
                  ) + '%'}
                </P>
              </Div>
            ))}
          </MainResult>
        </div>
      </Block>
    </>
  );
}

export default TableResults;
