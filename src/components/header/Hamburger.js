import React, { useState } from 'react';
import Flyout from './flyout/Flyout';
import { HamContainer, HamBox, HamInner } from './styles';

function Hamburger(props) {
  let [vis, setVis] = useState(false);

  // const handleVisibility = e => {
  //   e.preventDefault();
  //   setState((state.vis = !state.vis));
  // };

  return (
    <div className="oops" onClick={() => setVis((vis = !vis))}>
      {vis ? (
        <Flyout setVis={setVis} menuJSON={props.menuJSON} />
      ) : (
        <HamContainer>
          <HamBox>
            <HamInner />
          </HamBox>
        </HamContainer>
      )}
    </div>
  );
}

export default Hamburger;
