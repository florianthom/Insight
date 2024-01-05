import "@/src/app/global.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import React from "react";
import "@/src/app/global.css";
import { Meta } from "@/src/app/shared/meta/meta";

// call order: _document.tsx -> app.tsx -> app.tsx -> layout -> children
//  _document.tsx gets only rendered server-side

// next. js 3 function:
// - getInitialProps (legacy),
// - getStaticProps (get data on server at buildtime),
// - getServerSideProps (getData on server on run time)

const MyApp: NextPage<AppProps> = (props: AppProps) => {
    return (
        <div>
            <Meta />
            <props.Component {...props.pageProps} />
        </div>
    );
};

export default MyApp;
