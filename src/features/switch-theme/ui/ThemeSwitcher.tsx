import { FC } from 'react';

import { AppThemes, useTheme } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib';
import { Button, ButtonThemes, IconThemeDark, IconThemeLight } from '@/shared/ui';

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonThemes.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      <IconThemeLight className={theme === AppThemes.LIGHT ? '' : 'hidden'} />
      <IconThemeDark className={theme === AppThemes.DARK ? '' : 'hidden'} />
    </Button>
  );
};
