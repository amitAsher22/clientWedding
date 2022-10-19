import React from "react";
// style components
import styled from "styled-components";

/// react-dom
import { Link } from "react-router-dom";

import { cards } from "../../../pages/HomePage/DataCards/data";

function TopSectionHome() {
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
          {cards.map((card) => (
            <Link to={`/${card.link}`}>
              <SubGrid>
                <div>{card.icon}</div>
                <div>{card.title}</div>
              </SubGrid>
            </Link>
          ))}
        </GridDivCards>
      </Container>
    </>
  );
}
export default TopSectionHome;

const Container = styled.div`
  margin-bottom: 10rem;
  height: 100%;
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
