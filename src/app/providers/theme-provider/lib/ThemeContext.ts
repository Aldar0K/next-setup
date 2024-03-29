import { createContext } from 'react';

export enum AppThemes {
  LIGHT = 'app-light-theme',
  DARK = 'app-dark-theme'
}

export type ThemeContextProps = {
  theme: AppThemes;
  setTheme: (theme: AppThemes) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: AppThemes.LIGHT,
  setTheme: () => {}
});

