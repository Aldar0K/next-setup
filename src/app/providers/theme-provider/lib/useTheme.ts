import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../const';
import { AppThemes, ThemeContext } from './ThemeContext';

type UseThemeResult = {
  theme: AppThemes;
  setTheme: (theme: AppThemes) => void;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === AppThemes.LIGHT ? AppThemes.DARK : AppThemes.LIGHT;

    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    setTheme,
    toggleTheme
  };
};
