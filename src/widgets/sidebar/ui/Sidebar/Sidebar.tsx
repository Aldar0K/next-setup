import { ThemeSwitcher } from '@/features/switch-theme';
import { classNames } from '@/shared/lib';
import {
  AppLink,
  AppLinkThemes,
  Button,
  ButtonSizes,
  ButtonThemes,
  IconAbout,
  IconMain
} from '@/shared/ui';
import { FC, useState } from 'react';
import cls from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(prev => !prev);

  return (
    <div
      className={classNames(
        cls.container,
        {
          [cls.collapsed]: collapsed
        },
        [className]
      )}
      data-testid='Sidebar'
    >
      <Button
        theme={ButtonThemes.BACKGROUND_INVERTED}
        square
        size={ButtonSizes.L}
        onClick={toggleCollapsed}
        className={cls.button}
        data-testid='button-toggle'
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkThemes.SECONDARY} href={'/'} className={cls.link}>
          <IconMain className={cls.link__icon} />
          <span className={cls.link__text}>Главная</span>
        </AppLink>

        <AppLink theme={AppLinkThemes.SECONDARY} href={'/about'} className={cls.link}>
          <IconAbout className={cls.link__icon} />
          <span className={cls.link__text}>О нас</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher short={collapsed} /> */}
      </div>
    </div>
  );
};
