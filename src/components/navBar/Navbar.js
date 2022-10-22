import React from "react";
// style components
import styled from "styled-components";

/// react-dom
import { Link } from "react-router-dom";

/// data
import dataNavbar from "../../data/navbar.json";

function Navbar() {
  return (
    <>
      <ContainerNavBar>
        {dataNavbar.map((nameCategory) => (
          <SubDivNavBar key={nameCategory.title}>
            <NameCategoryNavBar>{nameCategory.title}</NameCategoryNavBar>
            <DropDownMenu>
              {nameCategory.subitems.map((item) => (
                <div key={item.title}>
                  <Link to={`${item.path}`}>{item.title}</Link>
                </div>
              ))}
            </DropDownMenu>
          </SubDivNavBar>
        ))}
      </ContainerNavBar>
    </>
  );
}

export default Navbar;

const ContainerNavBar = styled.div`
  display: flex;
  background-color: rgb(247, 247, 247);
  text-aline: center;
  justify-content: center;
  position: sticky;
  z-index: 1;
  top: 3.5rem;
`;

const DropDownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);

  width: 100%;
  background-color: white;
  font-size: 100%;
  text-aline: center;
`;

const SubDivNavBar = styled.div`
  position: relative;
  display: inline-block;
  padding: 0px 2rem;
  text-aline: center;

  &:hover {
    display: block;
    > div {
      display: block;
      width: 100%;
    }
  }
`;

const NameCategoryNavBar = styled.span`
  font-size: 2rem;
`;
