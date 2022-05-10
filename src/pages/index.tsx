import type { NextPage } from "next";
import Head from "next/head";
import { SideNav } from "../components/SideNav";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`Carolina's Portfolio`}</title>
        <meta
          name="description"
          content="Personal portfolio for Carolina Rodrigues de Jesus"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <SideNav />
        <h1> test</h1>
      </main>
    </div>
  );
};

export default Home;
