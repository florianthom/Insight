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
                <Head>{/*The <Head /> component used here is not the same one from next/head*/}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
