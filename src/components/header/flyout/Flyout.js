import React, { useState } from 'react';
import styled from 'styled-components';
import SideNavItem from './SideNavItem';

const SVG = (
  <svg width="16" height="16" viewBox="0 0 32 32">
    <path
      d="M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      id="Combined-Shape"
      fill="#FFFFFF"
    />
  </svg>
);

const FlyoutDiv = styled.div`
  background-color: var(--link);
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  padding: 1rem;
`;

const closerStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
};

function Flyout(props) {
  const [state, setState] = useState({
    vis: true,
  });

  const handleVisibility = e => {
    e.preventDefault();
    setState((state.vis = !state.vis));
  };

  return (
    <FlyoutDiv className="flyout">
      {props.menuJSON.results.map(res => (
        <SideNavItem
          key={res.id}
          section={res.section}
          subsections={res.subsections}
        />
      ))}

      <div className="close" style={closerStyle}>
        <a href="#0" onClick={() => handleVisibility}>
          {SVG}
        </a>
      </div>
    </FlyoutDiv>
  );
}

export default Flyout;
