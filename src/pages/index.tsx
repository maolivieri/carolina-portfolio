import type { NextPage } from "next";
import Head from "next/head";
import { SideNav } from "../components/SideNav";
import { HomeScreen } from "../screens/Home";
import { PortfolioScreen } from "../screens/Portfolio";

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
        <HomeScreen />
        <PortfolioScreen />
      </main>
    </div>
  );
};

export default Home;
