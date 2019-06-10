import React, { useState } from 'react';
import Flyout from './flyout/Flyout';
import { HamContainer, HamBox, HamInner } from './styles';

function Hamburger(props) {
  // let [vis, setVis] = useState(false);
  const [state, setState] = useState({
    vis: false,
  });
  return (
    <div onClick={() => setState((state.vis = !state.vis))}>
      {state.vis ? (
        // <Flyout setVis={setVis} menuJSON={props.menuJSON} />
        ''
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
