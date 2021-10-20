// components
import { GlobalStyles } from 'components/Theme';
import MainHeader from 'components/MainHeader';
import MainContainer from 'components/MainContainer';

// context
import { WrapperThemeProvider } from 'context/useThemeContext';

const App = () => {
  return (
    <WrapperThemeProvider>
      <GlobalStyles />
      <MainHeader />
      <MainContainer />
    </WrapperThemeProvider>
  );
};

export default App;
