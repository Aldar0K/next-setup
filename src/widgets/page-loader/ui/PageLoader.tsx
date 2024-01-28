import { classNames } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { FC } from 'react';
import cls from './PageLoader.module.scss';

type PageLoaderProps = {
  className?: string;
};

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(cls.container, {}, [className])}>
    <Loader />
  </div>
);

export default PageLoader;
