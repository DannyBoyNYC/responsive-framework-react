import React, { useState } from 'react';
import Flyout from './flyout/Flyout';
import { HamContainer, HamBox, HamInner } from './styles';

function Hamburger(props) {
  let [vis, setVis] = useState(true);

  return (
    <>
      {vis ? (
        <Flyout setVis={setVis} menuJSON={props.menuJSON} />
      ) : (
        <HamContainer onClick={() => setVis((vis = !vis))}>
          <HamBox>
            <HamInner />
          </HamBox>
        </HamContainer>
      )}
    </>
  );
}

export default Hamburger;
