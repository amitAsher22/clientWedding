import React from "react";

// style components
import styled from "styled-components";

// react-icons
import { GiSugarCane } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";

function Home() {
  return (
    <div>
      <MainDiv>
        <TitleOne>מסדרים הכל ליום הגדול</TitleOne>
        <TitleTwo>
          כל הספקים לחתונה במקום אחד, עם כלים שיעזרו לכם לעשות סדר
        </TitleTwo>
      </MainDiv>
      <GridDivCards>
        <SubGrid>
          <div>
            <GiSugarCane />
          </div>
          <span>גני אירועים</span>
        </SubGrid>
        <SubGrid>
          <div>
            <GiGlassCelebration />
          </div>
          <div>אולמות אירועים</div>
        </SubGrid>
        <SubGrid>
          <div>
            <GiAmpleDress />
          </div>
          <div>שמלות כלה</div>
        </SubGrid>
        <SubGrid>
          <div>
            <FaCameraRetro />
          </div>
          <div>צילום אירועים</div>
        </SubGrid>
        <SubGrid>1</SubGrid>
        <SubGrid>1</SubGrid>
        <SubGrid>1</SubGrid>
        <SubGrid>1</SubGrid>
      </GridDivCards>
    </div>
  );
}

export default Home;

const MainDiv = styled.div`
  text-align: center;
  padding: 3rem;
  color: #373c49;

  width: 70%;
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
  background-color: #2196f3;

  width: 60%;
  margin: auto;
`;

const SubGrid = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 3rem;
  font-size: 30px;
  text-align: center;
  height: 200px;
`;
