import React, { useState } from 'react';
import Flyout from './flyout/Flyout';
import { HamContainerBtn, HamOuterSpan, HamInnerSpan } from './styles';

function Hamburger(props) {
  let [vis, setVis] = useState(true);

  return (
    <>
      {vis ? (
        <Flyout setVis={setVis} menuJSON={props.menuJSON} />
      ) : (
        <HamContainerBtn onClick={() => setVis((vis = !vis))}>
          <HamOuterSpan>
            <HamInnerSpan />
          </HamOuterSpan>
        </HamContainerBtn>
      )}
    </>
  );
}

export default Hamburger;
