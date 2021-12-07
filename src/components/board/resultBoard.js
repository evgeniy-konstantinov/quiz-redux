import React from 'react';

import { ShowScore } from './styled';
import { questions } from '../../data/questions';

function ResultBoard(props) {
  return (
    <ShowScore>
      Имя
      <br />
      <br /> Ваш счет из {questions.length}
      <br />И это составляет: {Math.floor(questions.length * 100) + '%'}
    </ShowScore>
  );
}

export default ResultBoard;
