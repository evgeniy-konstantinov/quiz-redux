import styled from 'styled-components';

export const Main = styled.div`
  background-color: #252d4a;
  width: 600px;
  min-height: 200px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const QustionSection = styled.div`
  width: 100%;
  position: relative;
`;

export const QustionCount = styled.div`
  margin-bottom: 20px;
  color: #fff;
`;

export const Span = styled.span`
  font-size: 26px;
  color: #fff;
  text-align: center;
`;

export const QustionText = styled.div`
  padding: 5px;
  border: 5px dashed #234668;
  border-radius: 10px;
  margin-bottom: 12px;
  font-size: 21px;
  color: #fff;
  line-height: 150%;
`;

export const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Button = styled.button`
  width: 80%;
  font-size: 16px;
  color: #fff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid #234668;
  cursor: pointer;
  :hover {
    background-color: #555e7d;
  }
`;

export const ShowScore = styled.div`
  margin-top: 20px;
  background-color: #252d4a;
  width: 600px;
  min-height: 200px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  font-size: 30px;
  font-weight: 500;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NameSection = styled.div`
  margin: auto 0;
  background-color: #252d4a;
  width: 600px;
  min-height: 200px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  border-radius: 15px;
  width: 50%;
  height: 50px;
  outline: none;
  padding: 0 20px;
  font-size: 24px;
`;

export const ButtonName = styled.button`
  width: 30%;
  font-size: 24px;
  color: #fff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border: 5px solid #234668;
  cursor: pointer;
  :hover {
    background-color: #555e7d;
  }
`;
export const Td = styled.td`
  padding: 7px;
`;

export const Block = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BlockDes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
`;

export const BlockResult = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const MainResult = styled.div`
  width: 200px;
  text-align: center;
  margin: 50px;
  /* display: flex; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
`;

export const Div = styled.div`
  width: 20%;
  /* height: 100%; */
`;

export const P = styled.p`
  width: 200px;
`;
