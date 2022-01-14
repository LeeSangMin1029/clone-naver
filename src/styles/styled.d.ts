import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string;
      header: string;
      link: string;
      word: string;
      button: string;
    };
    green: string;
    bg_startLink: string;
    startLinkShadow: string;
    startLinkColor: string;
    borderBottom: string;
    toolbarBackground: string;
    toolbarShadow: string;
    themeContent: string;
  }
}
