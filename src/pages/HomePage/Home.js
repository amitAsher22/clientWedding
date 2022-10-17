import React from "react";

/// components
import LastSectionHome from "./LastSectionHome";
import SectionTree from "./SectionTree";

// style components
import styled from "styled-components";

/// react-dom
import { Link } from "react-router-dom";

// react-icons
import { GiSugarCane } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaIdeal } from "react-icons/fa";
import { BsStar } from "react-icons/bs";

function Home() {
  return (
    <>
      <Container>
        <MainDiv>
          <TitleOne>מסדרים הכל ליום הגדול</TitleOne>
          <TitleTwo>
            כל הספקים לחתונה במקום אחד, עם כלים שיעזרו לכם לעשות סדר
          </TitleTwo>
        </MainDiv>
        <GridDivCards>
          <Link to="/EventsGardens">
            <SubGrid>
              <div>
                <GiSugarCane />
              </div>
              <span>גני אירועים</span>
            </SubGrid>
          </Link>
          <Link to="/EventHall">
            <SubGrid>
              <div>
                <GiGlassCelebration />
              </div>
              <div>אולמות אירועים</div>
            </SubGrid>
          </Link>
          <Link to="/WeddingDress">
            <SubGrid>
              <div>
                <GiAmpleDress />
              </div>
              <div>שמלות כלה</div>
            </SubGrid>
          </Link>
          <Link to="/EventsPhotography">
            <SubGrid>
              <div>
                <FaCameraRetro />
              </div>
              <div>צילום אירועים</div>
            </SubGrid>
          </Link>
          <Link to="/Dj">
            <SubGrid>
              <div>
                <FiMusic />
              </div>
              <div>די ג'יי</div>
            </SubGrid>
          </Link>
          <Link to="/Catering">
            <SubGrid>
              <div>
                <MdOutlineRestaurant />
              </div>
              <div>קייטרינג</div>
            </SubGrid>
          </Link>
          <Link to="/WeddingDeals">
            <SubGrid>
              <div>
                <FaIdeal />
              </div>
              <div>מבצעים </div>
            </SubGrid>
          </Link>
          <Link to="/Stills">
            <SubGrid>
              <div>
                <BsStar />
              </div>
              <div>מיוחדים</div>
            </SubGrid>
          </Link>
        </GridDivCards>
      </Container>
      <LastSectionHome />
      <SectionTree />
    </>
  );
}

export default Home;

const Container = styled.div`
  margin-bottom: 10rem;
`;

const MainDiv = styled.div`
  text-align: center;
  padding: 3rem;
  color: #373c49;

  width: 80%;
  margin: auto;
  margin-top: 10rem;
`;

const TitleOne = styled.span`
  font-size: 7rem;
  font-weight: normal;
  font-family: "RaananLight"
  letter-spacing: normal;
`;

const TitleTwo = styled.p`
  font-size: 2rem;
  font-weight: normal;
  font-family: "RaananLight";
  letter-spacing: normal;
`;

const GridDivCards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  background: #fff4f4;
  width: 60%;
  margin: auto;
`;

const SubGrid = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  padding: 2rem;
  font-size: 30px;
  text-align: center;
  height: 200px;

  &:hover {
    cursor: pointer;
    background: white;
  }
`;
