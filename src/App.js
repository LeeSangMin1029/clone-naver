import { GlobalStyles } from './themes.js';
import Header from './Components/Header.js';
import Container from './Components/Container.js';
import { WrapperThemeProvider } from './Context/useThemeContext.js';

const App = () => {
  return (
    <WrapperThemeProvider>
      <GlobalStyles />
      <Header />
      <Container />
    </WrapperThemeProvider>
  );
};

export default App;
