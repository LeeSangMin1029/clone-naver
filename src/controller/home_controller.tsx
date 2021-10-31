import React from 'react';
import server from 'dom-server';
import Render from 'components/Render.tsx';
import { GlobalStyles } from 'styles/theme.ts';
import { ServerStyleSheet } from 'styled-components';

const assets = {
  'client.js': 'public/js/client.js',
};

const getStringHTML = (reactNode: React.ReactNode) => {
  const sheet = new ServerStyleSheet();
  const baseHTML = server.renderToString(sheet.collectStyles(reactNode));
  const style = sheet.getStyleTags();
  const resultHTML = baseHTML.replace('__STYLE_FROM_SERVER__', style);
  return `<!DOCTYPE html>${resultHTML}`;
};

const homePage = ({ response }: { response: any }) => {
  try {
    const html = getStringHTML(
      <>
        <GlobalStyles />
        <Render title="Naver Clone" assets={assets} />
      </>
    );
    response.body = html;
  } catch (error) {
    console.error(error);
  }
};

export { homePage };
