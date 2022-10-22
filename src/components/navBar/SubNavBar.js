import React, { useState } from "react";

// style components
import styled from "styled-components";

// react-icons
import { FcSearch } from "react-icons/fc";
import { BsPersonSquare } from "react-icons/bs";

/// Avatar-react
import Avatar from "react-avatar";

/// react-router
import { Link } from "react-router-dom";

function SubNavBar() {
  const [show, setShow] = useState(false);

  const showBtnSearch = () => {
    setShow(!show);
  };

  return (
    <MainSubNavBar>
      <DivRightSide>
        <DivIcons>
          <BsPersonSquare size="2rem" color="white" />
          <MenuDropDown>
            <p>registerion</p>
            <p>login</p>
          </MenuDropDown>
        </DivIcons>

        <DivIconsSearch>
          <FcSearch size="2rem" onClick={() => showBtnSearch()} />
          {show ? <InputSearch /> : null}
        </DivIconsSearch>
      </DivRightSide>
      <DivLeftSide>
        <DivAvatarImg>
          <Link to="/LikesPage">
            <Avatar
              round={true}
              src={"/images/weddinglogo.png"}
              alt="mylogo"
              size="100%"
            />
          </Link>
          <Link to="/">
            <Avatar
              round={true}
              src={"/images/myday.png"}
              alt="mylogo"
              size="100%"
            />
          </Link>
        </DivAvatarImg>
      </DivLeftSide>
    </MainSubNavBar>
  );
}

export default SubNavBar;

const MainSubNavBar = styled.div`
  width: 70%;
  height: 2.9rem;
  background: #5c6676;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 0.2rem 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const DivRightSide = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const DivLeftSide = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DivAvatarImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
`;

const DivIconsSearch = styled.div`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const DivIcons = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
    div {
      background: #5c6676;
      color: white;
      display: block;
      padding: 1rem;
      left: -3rem;
    }
  }
`;

const MenuDropDown = styled.div`
  position: absolute;
  display: none;
  z-index: 1;
`;

const InputSearch = styled.input`
  width: 30rem;
  border-radius: 2rem;
  border: none;
  font-size: 1.5rem;
`;
