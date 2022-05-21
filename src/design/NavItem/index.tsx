import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type IProps = {
  isActive?: boolean;
  children: ReactNode;
  icon?: string | null;
  handleClick?: () => void;
  linkHref?: string;
};

const NavItem = ({
  isActive = false,
  children,
  icon = null,
  handleClick,
  linkHref,
}: IProps) => {
  return (
    <div className={styles.container}>
      {!icon && linkHref ? (
        <>
          <Link href={linkHref}>
            <p className={!isActive ? styles.text : styles.activeText}>
              {children}
            </p>
          </Link>
          {isActive && <div className={styles.activeDot} />}
        </>
      ) : (
        <div className={styles.icon} onClick={handleClick}>
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
