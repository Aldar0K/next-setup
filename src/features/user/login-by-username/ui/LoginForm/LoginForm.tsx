import { classNames } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Button, ButtonThemes, Input, Text } from '@/shared/ui';
import { FormEventHandler, useCallback } from 'react';
import { getError } from '../../model/selectors/getError';
import { getIsLoading } from '../../model/selectors/getIsLoading';
import { getPassword } from '../../model/selectors/getPassword';
import { getUsername } from '../../model/selectors/getUsername';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginByUsernameSlice } from '../../model/slice';
import cls from './LoginForm.module.scss';

export type LoginFormProps = {
  className?: string;
};

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const username = useAppSelector(getUsername);
  const password = useAppSelector(getPassword);
  const isLoading = useAppSelector(getIsLoading);
  const error = useAppSelector(getError);

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(loginByUsernameSlice.actions.setUsername(value));
    },
    [dispatch]
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(loginByUsernameSlice.actions.setPassword(value));
    },
    [dispatch]
  );

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    event => {
      event.preventDefault();
      dispatch(loginByUsername({ username, password }));
    },
    [dispatch, username, password]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(cls.form, {}, [className])}
      data-testid='LoginForm'
    >
      <Text heading='Авторизация' />

      <Input
        type='text'
        placeholder='Имя пользователя'
        className={cls.input}
        value={username}
        onChange={handleUsernameChange}
      />

      <Input
        type='password'
        placeholder='Пароль'
        className={cls.input}
        value={password}
        onChange={handlePasswordChange}
      />

      {error && <Text theme='error' text='Неверное имя пользователя или пароль' />}

      <Button
        type='submit'
        theme={ButtonThemes.BACKGROUND}
        className={cls['button-submit']}
        loading={isLoading}
      >
        Войти
      </Button>
    </form>
  );
};
