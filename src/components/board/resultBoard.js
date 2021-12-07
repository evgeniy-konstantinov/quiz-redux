import React from 'react';

import { ShowScore } from './styled';

function ResultBoard() {
  return (
    <ShowScore>
      Ваш счет {score} из {questions.length}
      <br />
      <br />И это составляет:{' '}
      {Math.floor((score / questions.length) * 100) + '%'}
    </ShowScore>
  );
}

export default ResultBoard;
