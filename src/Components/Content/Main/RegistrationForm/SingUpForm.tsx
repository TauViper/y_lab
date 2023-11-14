import React, { FC } from 'react';
import {
  RegButton,
  RegCheckBoxWrapper,
  RegInput,
  RegLabel,
  RegSpan,
  RegText,
  RegTitle,
  RegWrapper,
} from 'src/Components/Content/Main/RegistrationForm/RegistrationForm.styled';

export interface SingUpFormProp {
  setVisible: (visible: boolean) => void;
  visible: boolean;
}
export const SingUpForm: FC<SingUpFormProp> = ({ setVisible, visible }) => {
  return (
    <RegWrapper>
      <RegButton onClick={() => setVisible(!visible)} color={'white'}>
        Зарегистрироваться
      </RegButton>
      <RegSpan>
        После регистрации вы получите доступ ко всем возможностям СОВЕСТИ
      </RegSpan>
    </RegWrapper>
  );
};
