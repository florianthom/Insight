import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GetServerSideProps, NextPage } from "next";

interface Props {
    launch?: {
        mission: string;
    };
}

const IndexPage: NextPage<Props> = (props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Florian Thom</title>
            </Head>
            <main>
                <div>
                    <h1>index.tsx</h1>
                </div>
            </main>
        </div>
    );
};

export default IndexPage;
