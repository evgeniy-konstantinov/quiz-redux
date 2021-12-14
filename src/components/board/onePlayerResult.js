import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { questions } from '../../data/questions';
import { Td, BlockDes, BlockResult } from './styled';

function OnePlayerResult() {
  const res = useSelector((store) => {
    const { setScoreListReducer } = store;

    return setScoreListReducer;
  });

  return (
    <>
      <BlockDes>
        <BlockResult>
          <Link to="/">на главную</Link>
          {res.map((el, i) => (
            <>
              <h1>{el.playerName}</h1>
              <table border="5" bordercolor="#c6c6c6" bgcolor="#FAEBD7">
                <tbody>
                  {el.score.map((el, i) => (
                    <tr key={i}>
                      <Td>{questions[i].question} </Td>
                      <Td>{el + ''}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ))}
        </BlockResult>
      </BlockDes>
    </>
  );
}

export default OnePlayerResult;
