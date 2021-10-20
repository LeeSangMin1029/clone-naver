// react function
import { createContext, useContext, useState } from 'react';

// style
import { ThemeProvider } from 'styled-components';

// components
import { lightTheme, darkTheme } from 'components/Theme';

const ThemeContext = createContext(null);

const WrapperThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const currentTheme = theme;
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ currentTheme, setTheme }}>{children}</ThemeContext.Provider>
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
