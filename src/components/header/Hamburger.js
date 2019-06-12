import React, { useState } from 'react';
import Flyout from './flyout/Flyout';
import { HamContainer, HamBox, HamInner } from './styles';

function Hamburger(props) {
  let [vis, setVis] = useState(false);

  return (
    <div href="#0">
      {vis ? (
        <Flyout setVis={setVis} menuJSON={props.menuJSON} />
      ) : (
        <HamContainer onClick={() => setVis((vis = !vis))}>
          <HamBox>
            <HamInner />
          </HamBox>
        </HamContainer>
      )}
    </div>
  );
}

export default Hamburger;
