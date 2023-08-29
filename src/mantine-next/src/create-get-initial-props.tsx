import React from 'react';
import NextDocument, { DocumentContext } from 'next/document';
import { ServerStyles, createStylesServer } from '@reactgets/ssr';
import { EmotionCache } from '@reactgets/styles';

export function createGetInitialProps(cache?: EmotionCache): (ctx: DocumentContext) => any {
  const stylesServer = createStylesServer(cache);

  return async function getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    };
  };
}
