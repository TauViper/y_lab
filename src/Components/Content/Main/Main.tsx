import React, { FC, useState } from 'react';
import {
  MainWrapper,
  TitleMainWrapper,
  TitleTextWrapper,
} from 'src/Components/Content/Main/Main.stayled';
import { SingUp } from 'src/Components/Content/SingUP/SingUp';
import { StyledP } from 'src/Components/Content/SingUP/SingUp.styled';
import { RegistrationForm } from 'src/Components/Content/Main/RegistrationForm/RegistrationForm';
import { SingUpForm } from 'src/Components/Content/Main/RegistrationForm/SingUpForm';

export const Main: FC = () => {
  return (
    <MainWrapper>
      <TitleMainWrapper>
        <TitleTextWrapper>
          <StyledP fontSize={'78px'} color={'white'} transform={'uppercase'}>
            Добро
            <br /> пожаловать
          </StyledP>
        </TitleTextWrapper>
        <div>
          <RegistrationForm />
        </div>
      </TitleMainWrapper>
    </MainWrapper>
  );
};
