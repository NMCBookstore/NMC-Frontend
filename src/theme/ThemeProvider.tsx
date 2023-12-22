import React, { FC, ReactNode, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

type SetThemeNameFunction = (themeName: string) => void;

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper: FC<ThemeProviderWrapperProps> = ({ children }) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);

  const handleSetThemeName: SetThemeNameFunction = (themeName) => {
    localStorage.setItem('appTheme', themeName);
    setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={handleSetThemeName}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
