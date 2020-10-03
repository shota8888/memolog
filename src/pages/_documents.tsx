import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  // DocumentContext,
  // DocumentInitialProps
} from 'next/document'
// import { RenderPageResult } from 'next/dist/next-server/lib/utils'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets as MaterialServerStyleSheets } from '@material-ui/core'
import { GA_TRACKING_ID } from '../lib/gtag'


class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const materialSheets = new MaterialServerStyleSheets();
  const styledComponentsSheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(
            materialSheets.collect(<App {...props} />)
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialSheets.getStyleElement(),
        styledComponentsSheet.getStyleElement(),
      ],
    };
  } finally {
    styledComponentsSheet.seal();
  }
};

export default MyDocument;

// export default class CustomDocument extends NextDocument {
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps> {
//     const styledComponentsSheet = new ServerStyleSheet()
//     const materialUiSheets = new MaterialServerStyleSheets()
//     const originalRenderPage = ctx.renderPage

//     try {
//       ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
//         originalRenderPage({
//           enhanceApp: (App) => (
//             props
//           ): React.ReactElement<{
//             sheet: ServerStyleSheet
//           }> =>
//             styledComponentsSheet.collectStyles(
//               materialUiSheets.collect(<App {...props} />)
//             )
//         })

//       const initialProps = await NextDocument.getInitialProps(ctx)
//       return {
//         ...initialProps,
//         styles: [
//           <React.Fragment key="styles">
//             {initialProps.styles}
//             {styledComponentsSheet.getStyleElement()}
//             {materialUiSheets.getStyleElement()}
//           </React.Fragment>
//         ]
//       }
//     } finally {
//       styledComponentsSheet.seal()
//     }
//   }

//   render(): React.ReactElement {
//     return (
//       <Html lang="ja-JP">
//         <Head>
//           {/* Global Site Tag (gtag.js) - Google Analytics */}
//           <script
//             async
//             src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
//           />
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${GA_TRACKING_ID}', {
//               page_path: window.location.pathname,
//             });
//           `,
//             }}
//           />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }