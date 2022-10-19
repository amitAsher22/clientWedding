import React from "react";
// style components
import styled from "styled-components";

/// react-dom
import { Link } from "react-router-dom";

import { cards } from "../../../pages/HomePage/DataCards/data";

function TopSectionHome() {
  console.log(cards, "dataCards");
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
            <Link to={`/${card.link}`} key={card.title}>
              <SubGrid>
                <div>{card.icon()}</div>
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
  padding: 5rem;
  color: #373c49;

  width: 80%;
  margin: auto;
  margin-top: 4rem;
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
  border: 0.1rem solid rgb(216, 216, 216);

  padding: 3rem;
  font-size: 30px;
  text-align: center;
  margin: auto;

  &:hover {
    cursor: pointer;
    background: white;
  }
`;
