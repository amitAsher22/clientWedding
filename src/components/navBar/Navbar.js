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
  justify-content: center;
  background-color: rgb(247, 247, 247);
  padding: 1rem 0;
  text-aline: center;
`;

const DropDownMenu = styled.div`
  position: absolute;
  display: none;
  background-color: #f1f1f1;
  padding: 2rem 0.5rem;
  text-align: right;
  width: 90%;
  font-size: 90%;
`;

const SubDivNavBar = styled.div`
  position: relative;

  width: 8%;
  text-align: center;
  border-left: 1px solid black;
  font-family: "heebo";
  &:hover {
    div {
      display: block;
      cursor: pointer;
    }
  }
`;

const NameCategoryNavBar = styled.span`
  text-align: center;
  font-size: 24px;
  font-weight: 300px;
  color: #3055b2;
  font-family: "Raanan-Light";
`;
