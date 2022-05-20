import styles from "./styles.module.scss";
import { SideNav } from "../../components/SideNav";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <SideNav />
      <main className={styles.main}>
        <h5 className={styles.headTitle}>A little bit</h5>
        <h1 className={styles.mainTitle}>about me</h1>
        <h5 className={styles.subTitle}>
          Originally from Capivari, Brazil | Currently in Chiang Mai, Thailand.
        </h5>
        <p>
          Hey there, I’m Carolina Rodrigues - but you can call me Carol. I’m a
          digital product designer and illustrator with a mixed educational
          background of business, design and project management, which ended up
          taking me a few places around the globe and working with different
          types of projects and clientes from diverse industries.
        </p>
        <p>
          Hey there, I’m Carolina Rodrigues - but you can call me Carol. I’m a
          digital product designer and illustrator with a mixed educational
          background of business, interior design and project management, which
          ended up taking me a few places around the globe and working with
          different types of projects and clientes from diverse industries.
        </p>
        <button className={styles.dowloadButton}>Download Resume</button>
        <div className={styles.extaContent}>
          <div className={styles.extaContentLeftColumn}>
            <p>
              with my dog, cooking, paiting, photographing or, as a good
              brazilian, in a barbecue with family and friends. I love traveling
              and being outside getting to know new places and people, but I’m
              also a huge fan of Netflix & chill days.
            </p>
          </div>
          <div className={styles.extaContentRightColumn}>
            <div className={styles.profileDetailCircle} />
          </div>
        </div>
        <div className={styles.skills}></div>
      </main>
      <footer></footer>
    </div>
  );
};

export default AboutPage;
