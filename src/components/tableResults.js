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

  let result = score.filter((el) => el === true);

  return (
    <>
      <div>
        <Link to="/">Пройти опрос еще раз</Link>
        <h1>{buttonText}</h1>
        <p>- правильных ответов: {result.length}</p>
        <p>- это состовляет {Math.floor((result.length / 12) * 100) + '%'}</p>
      </div>
    </>
  );
}

export default TableResults;
