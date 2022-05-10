import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavIcon } from "../../design/NavIcon";
import { NavItem } from "../../design/NavItem";

const SideNav = () => {
  const [active, setActive] = useState(false);
  const activePage = "Home" as "Home" | "About" | "Portfolio";

  return (
    <div className={styles.nav}>
      <div
        className={active ? styles.navBackgroundIn : styles.navBackgroundOut}
      />
      <NavIcon active={active} setActive={setActive} />
      {active && (
        <div className={styles.body}>
          <NavItem isActive={activePage === "Home"}>Home</NavItem>
          <NavItem isActive={activePage === "About"}>About</NavItem>
          <NavItem isActive={activePage === "Portfolio"}>Portfolio</NavItem>
          <NavItem icon="/assets/icons/mail.svg">Portfolio</NavItem>
          <NavItem icon="/assets/icons/phone.svg">Portfolio</NavItem>
          <NavItem icon="/assets/icons/linkedin.svg">Portfolio</NavItem>
        </div>
      )}
    </div>
  );
};

export { SideNav };
