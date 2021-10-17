import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  header: '#fff',
  bg_startLink: '#fff',
  startLinkShadow: '#d0d3d9',
  startLinkColor: '#404040',
  borderBottom: '#e4e8eb',
  toolbar: 'grey',
  toolbarBackground: '#f8f9f9',
  toolbarShadow: '#d0d3d9',
  inputColor: '#000',
  menuWordColor: '#000',
};

export const darkTheme = {
  body: '#1e1f21',
  header: '#292a2d',
  bg_startLink: '#464646',
  startLinkShadow: '#202020',
  startLinkColor: '#a8a8a8',
  borderBottom: '#3a3b3d',
  toolbar: '#8f8f8f',
  toolbarBackground: '#242527',
  toolbarShadow: '#212121',
  inputColor: '#fff',
  menuWordColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.body};
    height: 100vh;
  }
  *{
    box-sizing : border-box;
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
