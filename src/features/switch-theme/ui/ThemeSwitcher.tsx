import { AppThemes, useTheme } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib';
import { Button, ButtonThemes, IconThemeDark, IconThemeLight, Loader } from '@/shared/ui';
import { FC, useEffect, useState } from 'react';

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
  const { className } = props;
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

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
