import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    header: string;
    bg_startLink: string;
    startLinkShadow: string;
    startLinkColor: string;
    borderBottom: string;
    toolbar: string;
    toolbarBackground: string;
    toolbarShadow: string;
    inputColor: string;
    menuWordColor: string;
    themeContent: string;
    bg_themeBtn: string;
    bg_themeBtnHover: string;
    themeBtnImg: string;
    themeBtnWordHover: string;
    themeBtnWord: string;
    themeBtnImgHover: string;
  }
}
