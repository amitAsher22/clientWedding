import React from "react";
// style components
import styled from "styled-components";

/// react-dom
import { Link } from "react-router-dom";

/// pages > components
import EventsGardens from "../../pages/celebratePlace/EventsGardens";
import EventHall from "../../pages/celebratePlace/EventHall";
import BusinessEvents from "../../pages/celebratePlace/BusinessEvents";
import WeddingDress from "../../pages/Bride&Groom/WeddingDress";
import EveningDress from "../../pages/Bride&Groom/EveningDress";
import GroomSuit from "../../pages/Bride&Groom/GroomSuit";
import EventsPhotography from "../../pages/Photographs/EventsPhotography";
import Stills from "../../pages/Photographs/Stills";
import Video from "../../pages/Photographs/Video";
import Dj from "../../pages/music/Dj";
import RecordingStudio from "../../pages/music/RecordingStudio";
import ReceptionBands from "../../pages/music/ReceptionBands";
import Catering from "../../pages/cateringAndBar/Catering";
import SweetsBar from "../../pages/cateringAndBar/SweetsBar";
import Bar from "../../pages/cateringAndBar/Bar";
import WeddingDeals from "../../pages/Deals/WeddingDeals";
import EventsGardensHall from "../../pages/Deals/EventsGardensHall";

function Navbar() {
  return (
    <>
      <ContainerNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>מקום לחגוג</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/EventsGardens">
              <EventsGardens />
            </Link>
            <Link to="/EventHall">
              <EventHall />
            </Link>
            <Link to="/BusinessEvents">
              <BusinessEvents />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>לכלה ולחתן</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/WeddingDress">
              <WeddingDress />
            </Link>
            <Link to="/EveningDress">
              <EveningDress />
            </Link>
            <Link to="/GroomSuit">
              <GroomSuit />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>צילום</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/EventsPhotography">
              <EventsPhotography />
            </Link>
            <Link to="/Stills">
              <Stills />
            </Link>
            <Link to="/Video">
              <Video />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>מוזיקה</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/Dj">
              <Dj />
            </Link>
            <Link to="/RecordingStudio">
              <RecordingStudio />
            </Link>
            <Link to="/ReceptionBands">
              <ReceptionBands />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>קייטרינג ובר</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/Catering">
              <Catering />
            </Link>
            <Link to="/SweetsBar">
              <SweetsBar />
            </Link>
            <Link to="/Bar">
              <Bar />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>מבצעים</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/WeddingDeals">
              <WeddingDeals />
            </Link>
            <Link to="/EventsGardensHall">
              <EventsGardensHall />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
      </ContainerNavBar>
    </>
  );
}

export default Navbar;

const ContainerNavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(247, 247, 247);
  text-aline: center;
  justify-content: center;
  padding: 0.5rem 0px;
`;

const DropDownMenu = styled.div`
  position: absolute;
  display: none;
  background-color: white;
  padding: 1rem 0px;
  max-width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const SubDivNavBar = styled.div`
  position: relative;
  text-align: center;
  font-family: "heebo";
  max-width: 100%;
  padding: 0px 2rem;
  border-left: 1px solid black;
  &:hover {
    max-width: 100%;

    div {
      display: block;
      cursor: pointer;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0px 1rem;
      text-align: right;
    }
  }
`;

const NameCategoryNavBar = styled.span`
  text-align: right;
  font-size: 24px;
  font-weight: 200px;
  color: #373c49;
  width: 100%;
  margin: 0px 2rem;
  font-family: "Raanan-Light";
  :hover {
    color: #f9c8cc;
    cursor: context-menu;
  }
`;
