import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import React from "react";

// call order: _document.tsx -> app.tsx -> children
//  _document.tsx gets only rendered server-side

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<any> {
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            });
        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    render(): JSX.Element {
        super.render();
        return (
            <Html className="scroll-smooth" lang="en">
                <Head>
                    {/*The <Head /> component used here is not the same one from next/head*/}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-K6QHJWJ5');
                            `,
                        }}
                    />
                </Head>
                <body>
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `
                                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6QHJWJ5"
                                height="0" width="0" style="display:none;visibility:hidden"></iframe>
                            `,
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
