import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  inputTextActionCreator,
  startButtonActionCreator,
} from '../../store/actionCreators/actionCreators';

import { NameSection, Span, Input, ButtonName } from './styled';

function StartBoard(props) {
  const dispatch = useDispatch();

  const { text } = useSelector(({ inputReducer }) => inputReducer);

  const handleChange = (e) => {
    dispatch(inputTextActionCreator(e.target.value));
  };
  const setNamePlayer = () => {
    dispatch(startButtonActionCreator(text));
  };

  const buttonText = useSelector((store) => {
    const { startButtonReducer } = store;
    return startButtonReducer.playerName;
  });

  return (
    <NameSection>
      <Span>Введите ваше имя</Span>
      <Input type="text" onChange={handleChange} />

      <ButtonName onClick={setNamePlayer}>Начать</ButtonName>
    </NameSection>
  );
}

export default StartBoard;
