import styled from 'styled-components';
import { StyledP } from 'src/Components/Content/SingUP/SingUp.styled';

export const RegWrapper = styled.div`
  padding: 50px 98px;
  background-color: #553c93;
  border-radius: 5%;
  margin-bottom: 15px;
`;

export const RegTitle = styled.h2`
  font-size: 30px;
  color: #e3d8fe;
  text-align: center;
  padding: 1rem 1rem 0 1rem;
  text-transform: uppercase;
`;
export const RegText = styled.p.withConfig({
  shouldForwardProp: (prop) => !['layout', 'transition'].includes(prop),
})<StyledP>`
  font-family: 'Tilda Sans', serif;
  color: ${({ color }) => color || 'red'};
  font-size: ${({ fontSize }) => fontSize || '10px'};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-family: ${({ font }) => font};
  text-transform: ${({ transform }) => transform};
`;
export const RegCheckBoxWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
export const RegInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !['layout'].includes(prop),
})<{ top?: string }>`
  border: none;
  height: 20px;
  margin-top: ${({ top }) => top || '20px'};
  background-color: #7e55e3;
  color: #ddbdd8;
  /* outline: none; */
  padding: 6px 0;
  border-radius: 5px;
  width: ${({ width }) => width || '100%'};

  &::placeholder {
    color: #ddbdd8;
  }
`;
export const RegLabel = styled.label`
  color: white;
  font-family: 'Tilda Sans', serif;
`;

export const RegButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['layout', 'transition'].includes(prop),
})<{ width?: string; top?: string }>`
  cursor: pointer;
  border: none;
  height: 30px;
  margin-top: ${({ top }) => top || '20px'};
  background-color: #7e55e3;
  color: ${({ color }) => color || '#E3D8FE'};
  /* outline: none; */
  padding: 6px 0;
  text-transform: uppercase;
  border-radius: 5px;
  width: ${({ width }) => width || '100%'};
  font-family: 'Balpaq', serif;
`;
export const RegSpan = styled.span`
  margin-top: 5px;
  display: block;
  text-align: center;
  color: white;
  font-family: 'Tilda Sans', serif;
`;
