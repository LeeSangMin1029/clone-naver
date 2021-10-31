// react function
import React, { createContext, useContext, useState } from 'react';

// style
import { ThemeProvider } from 'styled-components';

// components
import { lightTheme, darkTheme } from 'styles/theme.ts';

type IContextProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext({} as IContextProps);

const WrapperThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Cannot find WrapperThemeProvider');
  }
  return context;
};

export { WrapperThemeProvider, useThemeContext };
