import { classNames } from '@/shared/lib';
import { Button, ButtonThemes } from '@/shared/ui';
import { FC } from 'react';
import cls from './PageError.module.scss';

type PageErrorProps = {
  className?: string;
};

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.container, {}, [className])}>
      <p className={cls.text}>Что-то пошло не так</p>
      <Button theme={ButtonThemes.CLEAR} onClick={refreshPage}>
        Перезагрузить страницу
      </Button>
    </div>
  );
};
