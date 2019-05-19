import React from "react";
import User from "./User";
import styled from "styled-components";

import { device } from "../styles/device";

import search from "../art/search.svg";
import watchlist from "../art/watchlist.svg";
import briefcase from "../art/briefcase.svg";
import connect from "../art/connect.svg";

const utilities = ["search", "watchlist", "briefcase", "connect"];

const UtilityContainer = styled.ul`
  display: flex;
  white-space: nowrap;
  height: 22px;
  a {
    display: flex;
    font-size: 14px;
  }
  .util-title {
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }
  .search .util-icon {
    background-image: url(${search});
  }
  .watchlist .util-icon {
    background-image: url(${watchlist});
  }
  .briefcase .util-icon {
    background-image: url(${briefcase});
  }
  .connect .util-icon {
    background-image: url(${connect});
  }
  .util-icon {
    // display: block;
    width: 1.25rem;
    height: 1.25rem;
    padding-right: 1.5rem;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
const UtilityListItem = styled.li`
  margin-left: 1rem;
`;

function Utilities() {
  return (
    <UtilityContainer>
      {utilities.map(util => (
        <UtilityListItem key={util}>
          <a className={util} href='#0'>
            <span className='util-icon' />
            <span className='util-title'>
              {util.charAt(0).toUpperCase() + util.slice(1)}
            </span>
          </a>
        </UtilityListItem>
      ))}
      <User />
    </UtilityContainer>
  );
}

export default Utilities;
