import Image from "next/image";
import { FC } from "react";
import { ProfileBox } from "../../components/profileBox";
import styles from "./styles.module.scss";
interface IProps {
  id: string;
}

const HomeScreen = ({ id }: IProps) => {
  return (
    <div className={styles.container} id={id}>
      <div className={styles.highlight}>
        <div className={styles.highlightIcon}>
          <Image
            src="/assets/icons/highlight.svg"
            height={33}
            width={33}
            alt="blink"
            layout="responsive"
          />
        </div>
        <p>Available for new collaborations</p>
      </div>
      <div className={styles.content}>
        <h5 className={styles.header}>{`Hey there, I’m`}</h5>
        <h1 className={styles.title}>Carolina</h1>
        <h1 className={styles.title}>Rodrigues</h1>
        <p className={styles.copy}>
          {`
      A UI | UX designer & illustator passionate about solving puzzels
      with beautiful but effortles solutions that will bring funcionality
      and some fun to the users.`}
        </p>
        <h4 className={styles.subTitle}>Check out my work</h4>
        <div className={styles.arrowRight}>
          <Image
            src="/assets/icons/arrow_right.svg"
            height={60}
            width={30}
            alt="arrow to right"
            layout="responsive"
          />
        </div>
      </div>
      <ProfileBox />
    </div>
  );
};

export { HomeScreen };
