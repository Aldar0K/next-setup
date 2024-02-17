import { classNames } from '@/shared/lib';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

type AppLinkProps = LinkProps & {
  theme?: AppLinkThemes;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
};

export const AppLink: FC<AppLinkProps> = props => {
  const {
    href,
    theme = AppLinkThemes.PRIMARY,
    children,
    className,
    activeClassName,
    ...otherProps
  } = props;
  const { asPath, isReady } = useRouter();

  return (
    <Link
      href={href}
      className={classNames(
        cls.container,
        {
          [cls.active]: isReady && asPath === href
        },
        [cls[theme], className]
      )}
      data-testid='AppLink'
      {...otherProps}
    >
      {children}
    </Link>
  );
};
