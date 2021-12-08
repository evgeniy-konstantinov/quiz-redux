import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  inputTextActionCreator,
  startButtonActionCreator,
} from '../../store/actionCreators/actionCreators';

import { NameSection, Span, Input, ButtonName } from './styled';

function StartBoard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { text } = useSelector(({ inputReducer }) => inputReducer);

  const handleChange = (e) => {
    dispatch(inputTextActionCreator(e.target.value));
  };
  const setNamePlayer = () => {
    dispatch(startButtonActionCreator(text));
    if (text) {
      navigate('/quiz');
    } else {
      alert('Введите ваше имя');
    }
  };

  return (
    <NameSection>
      <Span>Введите ваше имя</Span>
      <Input type="text" onChange={handleChange} />

      <ButtonName onClick={setNamePlayer}>Начать</ButtonName>
    </NameSection>
  );
}

export default StartBoard;
