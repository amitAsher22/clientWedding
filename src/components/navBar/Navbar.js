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
  console.log(dataNavbar, "dataNavbar");
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
`;

const DropDownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
`;

const SubDivNavBar = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 1rem 2rem;

  &:hover {
    display: block;
    > div {
      display: block;
    }
  }
`;

const NameCategoryNavBar = styled.span`
  font-size: 1.5rem;
`;
