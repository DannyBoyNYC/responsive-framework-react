import React, { useState, useEffect } from "react";
// import styled, { css } from "styled-components";
import { NavLinkLi, DropdownUl, NavlinkA } from "./styles";

function More(props) {
  let [vis, setVis] = useState(false);
  let [section, setSection] = useState(false);

  const SVG = (
    <svg width='16' height='16' viewBox='0 0 32 32'>
      <path
        d='M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M29,16 L9,6 L9,26 L29,16 Z'
        id='Combined-Shape'
        fill='#ffffff'
      />
    </svg>
  );

  useEffect(() => {
    console.log(section);
    var test = document.querySelector("t-home");
    console.log(test);
  });

  return (
    <NavLinkLi
      style={{ alignItems: "center", alignContent: "center" }}
      // ${vis ? 'active' : ''}`}
      onMouseEnter={() => setVis((vis = !vis))}
      onMouseLeave={() => setVis((vis = !vis))}
    >
      <a onClick={() => setSection((section = !section))}>{SVG}</a>

      <DropdownUl className={vis ? "" : "hidden"}>
        {section ? "true" : "false"}
      </DropdownUl>
    </NavLinkLi>
  );
}

export default More;
