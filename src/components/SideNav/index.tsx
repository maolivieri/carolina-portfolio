import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavIcon } from "../../design/NavIcon";
import { NavItem } from "../../design/NavItem";
import { useRouter } from "next/router";

const SideNav = () => {
  const { asPath } = useRouter();
  const [active, setActive] = useState(false);
  // const [activePage, setActivePage] = useState<"Home" | "About" | "Portfolio">(
  //   "Home"
  // );

  // switch (router.asPath) {
  //   case "/#home": {
  //     setActivePage("Home");
  //     break;
  //   }
  //   case "/#portfolio": {
  //     setActivePage("Portfolio");
  //     break;
  //   }
  //   case "/about": {
  //     setActivePage("About");
  //     break;
  //   }
  //   default: {
  //     break;
  //   }
  // }

  return (
    <div className={styles.nav}>
      <div
        className={active ? styles.navBackgroundIn : styles.navBackgroundOut}
      />
      <NavIcon active={active} setActive={setActive} />
      {active && (
        <div className={active ? styles.bodyIn : styles.bodyOut}>
          <NavItem
            isActive={asPath === "/" || asPath === "/#home" ? true : false}
            linkHref="/#home"
          >
            Home
          </NavItem>
          <NavItem
            isActive={asPath === "/" || asPath === "/about" ? true : false}
            linkHref="/about"
          >
            About
          </NavItem>
          <NavItem
            isActive={asPath === "/" || asPath === "/#portfolio" ? true : false}
            linkHref="/#portfolio"
          >
            Portfolio
          </NavItem>
          <NavItem icon="/assets/icons/mail.svg">Portfolio</NavItem>
          <NavItem icon="/assets/icons/phone.svg">Portfolio</NavItem>
          <NavItem icon="/assets/icons/linkedin.svg">Portfolio</NavItem>
        </div>
      )}
    </div>
  );
};

export { SideNav };
