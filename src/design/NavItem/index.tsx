import Image from "next/image";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type IProps = {
  isActive?: boolean;
  children: ReactNode;
  icon?: string | null;
};

const NavItem = ({ isActive = false, children, icon = null }: IProps) => {
  return (
    <div className={styles.container}>
      {!icon ? (
        <p className={isActive ? styles.text : styles.activeText}>{children}</p>
      ) : (
        <div className={styles.icon}>
          <Image
            src={icon ? icon : "/"}
            width={26}
            height={26}
            layout="responsive"
            alt="linkedin icon"
          />
        </div>
      )}
    </div>
  );
};

export { NavItem };
