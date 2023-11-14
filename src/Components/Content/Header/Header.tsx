import { FC } from 'react';

import {
  HeaderStyled,
  HeaderText,
} from 'src/Components/Content/Header/Header.styled';

export const Header: FC = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderText>Y_LAB</HeaderText>
      </HeaderStyled>
    </>
  );
};
