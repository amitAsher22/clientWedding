import React from "react";
// style components
import styled from "styled-components";

/// react-dom
import { Link } from "react-router-dom";

/// pages
// import EventsGardens from "../../pages/celebratePlace/EventsGardens";
// import EventHall from "../../pages/celebratePlace/EventHall";
// import BusinessEvents from "../../pages/celebratePlace/BusinessEvents";
// import WeddingDress from "../../pages/Bride&Groom/WeddingDress";
// import EveningDress from "../../pages/Bride&Groom/EveningDress";
// import GroomSuit from "../../pages/Bride&Groom/GroomSuit";
// import EventsPhotography from "../../pages/Photographs/EventsPhotography";
// import Stills from "../../pages/Photographs/Stills";
// import Video from "../../pages/Photographs/Video";
// import Dj from "../../pages/music/Dj";
// import RecordingStudio from "../../pages/music/RecordingStudio";
// import ReceptionBands from "../../pages/music/ReceptionBands";
// import Catering from "../../pages/cateringAndBar/Catering";
// import SweetsBar from "../../pages/cateringAndBar/SweetsBar";
// import Bar from "../../pages/cateringAndBar/Bar";
// import WeddingDeals from "../../pages/Deals/WeddingDeals";
// import EventsGardensHall from "../../pages/Deals/EventsGardensHall";
// import Kamakesef from "../../pages/UsefulTools/Kamakesef";
// import QandA from "../../pages/UsefulTools/QandA";

/// data
import dataNavbar from "../../data/navbar.json";

function Navbar() {
  return (
    <>
      {/* <ContainerNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>מקום לחגוג</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/navbar/EventsGardens">
              <EventsGardens />
            </Link>
            <Link to="/navbar/EventHall">
              <EventHall />
            </Link>
            <Link to="/navbar/BusinessEvents">
              <BusinessEvents />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>לכלה ולחתן</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/navbar/WeddingDress">
              <WeddingDress />
            </Link>
            <Link to="/navbar/EveningDress">
              <EveningDress />
            </Link>
            <Link to="/navbar/GroomSuit">
              <GroomSuit />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>צילום</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/navbar/EventsPhotography">
              <EventsPhotography />
            </Link>
            <Link to="/navbar/Stills">
              <Stills />
            </Link>
            <Link to="/navbar/Video">
              <Video />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>מוזיקה</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/navbar/Dj">
              <Dj />
            </Link>
            <Link to="/navbar/RecordingStudio">
              <RecordingStudio />
            </Link>
            <Link to="/navbar/ReceptionBands">
              <ReceptionBands />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>קייטרינג ובר</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/navbar/Catering">
              <Catering />
            </Link>
            <Link to="/navbar/SweetsBar">
              <SweetsBar />
            </Link>
            <Link to="/navbar/Bar">
              <Bar />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>מבצעים</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/navbar/WeddingDeals">
              <WeddingDeals />
            </Link>
            <Link to="/navbar/EventsGardensHall">
              <EventsGardensHall />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
        <SubDivNavBar>
          <NameCategoryNavBar>כלים שימושיים</NameCategoryNavBar>
          <DropDownMenu>
            <Link to="/navbar/Kamakesef">
              <Kamakesef />
            </Link>
            <Link to="/navbar/QandA">
              <QandA />
            </Link>
          </DropDownMenu>
        </SubDivNavBar>
      </ContainerNavBar> */}
      <ContainerNavBar>
        {dataNavbar.map((category) => (
          <SubDivNavBar key={category.title}>
            <NameCategoryNavBar>{category.title}</NameCategoryNavBar>
            {category.subitems.map((sub) => (
              <DropDownMenu key={sub.title}>
                <Link to={sub.path}>{sub.title}</Link>
              </DropDownMenu>
            ))}
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
`;

const DropDownMenu = styled.div`
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  display: none;
`;

const SubDivNavBar = styled.div`
  text-align: center;
  font-family: "heebo";
  border-left: 1px solid black;
  position: relative;
  &:hover {
    div {
      display: block;
      cursor: pointer;
      height: 100%;
      width: 100%;
    }
  }
`;

const NameCategoryNavBar = styled.span`
  font-size: 24px;
  font-weight: 100px;
  color: #373c49;
  margin: 0px 1rem;
  font-family: "Raanan-Light";
  position: relative;

  :hover {
    color: #f9c8cc;
    cursor: context-menu;
  }
`;
