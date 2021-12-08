import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TableResults(props) {
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
      <Link to="/">Пройти опрос еще раз</Link>
      <h1>
        {buttonText} - {score}
      </h1>
    </>
  );
}

export default TableResults;
