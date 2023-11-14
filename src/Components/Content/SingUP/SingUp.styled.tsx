import styled from 'styled-components';

export interface StyledP {
  fontSize?: string;
  width?: string;
  height?: string;
  font?: string;
  transform?: string;
}

export const StyledForm = styled.form.withConfig({
  shouldForwardProp: (prop) => !['layout', 'transition'].includes(prop),
})<{ isValid: boolean }>`
  @keyframes ani {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  animation: ani 2.5s both;
  top: 5%;
  left: 10%;
  z-index: 2;
  //position: absolute;
  transition: 2s;
  margin: 25px 15px;
  width: 480px;
  border-radius: 30px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ isValid }) => (isValid ? '#6b4bbc' : '#e3d8fe')};
`;

export const StyledInput = styled.input`
  //width: 220px;
  height: 25px;
  margin: 0 25px;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: #ddbdd8;
  outline: none;
  &::placeholder {
    color: #ddbdd8;
  }
  padding: 6px 10px;
`;
export const StyledLabel = styled.label`
  color: #072ba2;
`;
export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['layout', 'transition'].includes(prop),
})<{ font?: string; isValid?: boolean }>`
  color: ${({ isValid }) => (isValid ? '#7E55E3' : '#e3d8fe')};
  cursor: ${({ isValid }) => (isValid ? 'pointer' : 'not-allowed')};
  margin: 45px auto;
  width: 400px;
  height: 35px;
  background-color: white;
  font-family: ${({ font }) => font};
  border-radius: 10px;
`;
export const StyledDiv = styled.div``;
export const StyledP = styled.p.withConfig({
  shouldForwardProp: (prop) => !['layout', 'transition'].includes(prop),
})<StyledP>`
  padding: 15px 35px;
  color: ${({ color }) => color || 'red'};
  font-size: ${({ fontSize }) => fontSize || '10px'};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-family: ${({ font }) => font};
  text-transform: ${({ transform }) => transform};
`;
export const TextWrapper = styled.div`
  width: 380px;
  min-height: 177px;
  margin: 0 auto;
`;
export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
