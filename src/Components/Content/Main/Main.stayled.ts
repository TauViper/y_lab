import styled from 'styled-components';
import imgUp from 'src/assets/Vector1.svg';
import imgDown from 'src/assets/Vector2.svg';
export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  background: no-repeat top right/18% url(${imgUp}),
    no-repeat bottom right / 18% url(${imgDown}), #6b4bbc;
`;

export const TitleMainWrapper = styled.div`
  position: absolute;
  //width: -webkit-fill-available;
  width: 80%;
  top: 10%;
  left: 10%;
  height: 534px;
  display: flex;
  //justify-content: space-between;
  //margin: auto;
  //border: 1px solid white;
`;
export const TitleTextWrapper = styled.div`
  width: 70%;
  height: 50%;
  align-self: center;
`;
