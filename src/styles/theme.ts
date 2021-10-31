// styled
import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
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
  themeContent: '\f186',
  bg_themeBtn: '#fff',
  bg_themeBtnHover: '#404040',
  themeBtnImg: '#5e6267',
  themeBtnWordHover: '#d4d4d4',
  themeBtnWord: '#2c2c2c',
  themeBtnImgHover: '#fce303',
};

export const darkTheme: DefaultTheme = {
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
  themeContent: '\f185',
  bg_themeBtn: '#333638',
  bg_themeBtnHover: '#53575c',
  themeBtnImg: '#c2c9d1',
  themeBtnWordHover: '#d4d4d4',
  themeBtnWord: '#d5d5d5',
  themeBtnImgHover: '#00f557',
};

export const GlobalStyles = createGlobalStyle`
  body{
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
