import React from 'react';

type RenderProps = {
  assets: any;
  title: string;
};

export default function Render({ assets, title }: RenderProps) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="public/assets/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app" />
          <link rel="manifest" href="public/assets/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@500&family=Jua&display=swap"
            rel="stylesheet"
          />
          <title>{title}</title>
          __STYLE_FROM_SERVER__
        </head>
        <body>
          <div id="root"></div>
          <script
            dangerouslySetInnerHTML={{ __html: `assetManifest = ${JSON.stringify(assets)};` }}
          />
          <script async src={assets['client.js']}></script>
          <script async src={'public/js/index.js'}></script>
          <script src="https://kit.fontawesome.com/27df09e635.js" crossOrigin="anonymous"></script>
        </body>
      </html>
    </>
  );
}
