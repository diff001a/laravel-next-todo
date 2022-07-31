import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { CacheProvider } from '@emotion/react';
import { renderToString } from 'react-dom/server';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

function createEmotionCache() {
  return createCache({ key: 'css' });
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => <App emotionCache={cache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map(style => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));
    return {
      ...initialProps,
      styles: (
        <>
          {emotionStyleTags}
          {initialProps.styles}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
