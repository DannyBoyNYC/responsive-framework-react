import React from "react";

import { MenulinkA } from "./styles";

function SubmenuItem(props) {
  return (
    <li>
      <MenulinkA href={props.link}>{props.link}</MenulinkA>
    </li>
  );
}

export default SubmenuItem;
