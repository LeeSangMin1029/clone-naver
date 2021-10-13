import { createGlobalStyle } from 'styled-components';
import Header from './Components/Header.js';

const GlobalStyle = createGlobalStyle`
  body{
    padding : 0px;
    margin: 0px;
    box-sizing : border-box;
  }
  *{
    padding: 0px;
    margin: 0px;
  }
  button, input {
    border: 0;
  }
  a {
    user-select: none;
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
};

export default App;
