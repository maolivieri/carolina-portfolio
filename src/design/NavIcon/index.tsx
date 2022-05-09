import Image from "next/image";
import { FC } from "react";
import styles from "./styles.module.scss";

interface IProps {
  active: boolean;
  setActive: (status: boolean) => void;
}

const NavIcon: FC<IProps> = ({ active, setActive }) => {
  return (
    <div className={styles.container} onClick={() => setActive(!active)}>
      <div className={styles.top}>
        <Image
          src="/assets/icons/top.svg"
          height={8}
          width={25}
          alt="sidenavimage"
        />
      </div>
      <div className={active ? styles.bottomActive : styles.bottomInactive}>
        <Image
          src="/assets/icons/bottom.svg"
          height={8}
          width={45}
          alt="sidenavimage"
        />
      </div>
    </div>
  );
};

export { NavIcon };
