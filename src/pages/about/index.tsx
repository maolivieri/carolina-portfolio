import styles from "./styles.module.scss";
import { SideNav } from "../../components/SideNav";
import Image from "next/image";
import skillsJson from "./skills.json";

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
        {/* <button className={styles.dowloadButton}>Download Resume</button> */}
        <div className={styles.extaContent}>
          <div className={styles.extaContentLeftColumn}>
            <p>
              {`
              with my dog, cooking, paiting, photographing or, as a good
              brazilian, in a barbecue with family and friends. I love traveling
              and being outside getting to know new places and people, but I’m
              also a huge fan of Netflix & chill days.`}
            </p>
          </div>
          <div className={styles.extaContentRightColumn}>
            <div className={styles.profileDetailCircle} />
          </div>
        </div>
        <div className={styles.skillsSectionWrapper}>
          <h3 className={styles.skillsSectionTitle}>Skills</h3>
          <div className={styles.skills}>
            {skillsJson.map((skill) => (
              <div key={skill.skill_title}>
                <h6>{skill.skill_title}</h6>
                <ul>
                  {skill.skills_list.map((sk) => (
                    <li key={sk}>{sk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className={styles.footer}>
        <div className={styles.footerHightlight}>
          <p className={styles.footerHightlightText}>
            {`Feel free to reach out. I'm looking forward to hearing from you`}
          </p>
          <p className={styles.footerHightlightFace}>:)</p>
        </div>
        <div className={styles.footerContent}>
          <h3>
            Carolina <br /> Rodrigues
          </h3>
          <div className={styles.contactSectionWrapper}>
            <div className={`${styles.contactBox}`}>
              <div>
                <Image
                  src="/assets/icons/mail.svg"
                  width={26}
                  height={26}
                  layout="responsive"
                  alt="email icon"
                />
              </div>
              <p>carol.rj00@hotmail.com</p>
            </div>
            <div className={`${styles.contactBox} ${styles.contactMargin}`}>
              <div>
                <Image
                  src="/assets/icons/phone.svg"
                  width={26}
                  height={26}
                  layout="responsive"
                  alt="phone icon"
                />
              </div>
              <p>+61 497 803 687</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
