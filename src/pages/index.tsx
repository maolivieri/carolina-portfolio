import type { NextPage } from "next";
import Head from "next/head";
import { createRef } from "react";
import { SideNav } from "../components/SideNav";
import { HomeScreen } from "../screens/Home";
import { PortfolioScreen } from "../screens/Portfolio";

const Home: NextPage = () => {
  const mainDivRef = createRef<HTMLDivElement>();

  const scrollFunction = (scrollOffset: number) => {
    mainDivRef.current!.scrollLeft += scrollOffset;
  };

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

      <main
        ref={mainDivRef}
        className="main"
        onWheel={(e) => {
          scrollFunction(e.deltaY);
        }}
      >
        <SideNav />
        <HomeScreen />
        <PortfolioScreen />
      </main>
    </div>
  );
};

export default Home;
