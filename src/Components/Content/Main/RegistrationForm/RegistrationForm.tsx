import React, { FC } from 'react';
import {
  RegButton,
  RegCheckBoxWrapper,
  RegInput,
  RegLabel,
  RegText,
  RegTitle,
  RegWrapper,
} from 'src/Components/Content/Main/RegistrationForm/RegistrationForm.styled';

export const RegistrationForm: FC = () => {
  return (
    <RegWrapper>
      <RegTitle>Что натворил?</RegTitle>
      <RegText fontSize='29px' color='#e3d8fe'>
        Поделись своим грешком
      </RegText>
      <RegInput placeholder='Телефон или почта' />
      <RegCheckBoxWrapper>
        <RegInput
          top='auto'
          width={'25px'}
          type='checkbox'
          id='safe'
          name='safe'
        />
        <RegLabel htmlFor='safe'>Сохранить вход</RegLabel>
      </RegCheckBoxWrapper>
      <RegButton>Войти</RegButton>
    </RegWrapper>
  );
};
