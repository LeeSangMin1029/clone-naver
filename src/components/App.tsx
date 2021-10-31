import React from 'react';

// components
import MainHeader from 'components/MainHeader/mod.tsx';
import MainContainer from 'components/MainContainer/mod.tsx';

// context
import { WrapperThemeProvider } from 'context/useThemeContext/mod.tsx';

export default function App() {
  return (
    <WrapperThemeProvider>
      <MainHeader />
      <MainContainer />
    </WrapperThemeProvider>
  );
}
