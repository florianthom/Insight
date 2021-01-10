import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import React from "react";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
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
            <Html lang="en">
                <Head>
                    {/*The <Head /> component used here is not the same one from next/head*/}
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="robots" content="index,follow" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
