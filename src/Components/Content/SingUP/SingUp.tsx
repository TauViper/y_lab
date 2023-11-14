import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from 'src/Components/Store/types';
import {
  InputsWrapper,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledP,
  TextWrapper,
} from 'src/Components/Content/SingUP/SingUp.styled';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { userLogin } from 'src/Components/Store/authReducer';

const userSchema: ZodType<LoginSchema> = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string().email({ message: 'Не соотвествует формату почты' }),
});
export const SingUp: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(userSchema),
    mode: 'onBlur',
  });

  const dispatch = useDispatch<ThunkDispatch<LoginSchema, void, AnyAction>>();

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
    dispatch(userLogin(data));
    reset();
  };
  return (
    <>
      <StyledForm isValid={isValid} onSubmit={handleSubmit(onSubmit)}>
        <TextWrapper>
          <StyledP
            fontSize={'50px'}
            height={'110px'}
            color={'white'}
            transform={'uppercase'}
          >
            Добро
            <br /> пожаловать
          </StyledP>
        </TextWrapper>
        <InputsWrapper>
          <StyledInput placeholder={'Имя'} {...register('name')} />

          <StyledInput
            type='password'
            placeholder={'password'}
            {...register('password')}
          />
          <StyledInput
            placeholder={'Почта'}
            type='email'
            {...register('email')}
          />
          <StyledDiv>
            {errors.email && <StyledP>{errors.email.message}</StyledP>}
          </StyledDiv>
          <StyledButton
            isValid={isValid}
            font={'Balpaq'}
            disabled={!isValid}
            type='submit'
          >
            Создать аккаунт
          </StyledButton>
        </InputsWrapper>
      </StyledForm>
    </>
  );
};
