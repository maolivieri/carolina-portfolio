import React, { useState } from "react";
import { NavIcon } from "../../design/NavIcon";

const SideNav = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <NavIcon active={active} setActive={setActive} />
    </div>
  );
};

export { SideNav };
