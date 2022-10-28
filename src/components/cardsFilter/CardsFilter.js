import React from "react";

/// data
import { information } from "../../data/globalData";

// style components
import styled from "styled-components";

import { Outlet } from "react-router-dom";

function CardsFilter() {
  return (
    <>
      <MainCards>
        {information.categoryFilters.map((card) => (
          <Card key={card.title}>
            <TitleCard>{card.title}</TitleCard>
            <Category>{card.category1}</Category>
            <Category>{card.category2}</Category>
            <Category>{card.category3}</Category>
            <Category>{card.category4}</Category>
            <Category>{card.category5}</Category>
          </Card>
        ))}
      </MainCards>

      <Outlet />
    </>
  );
}

export default CardsFilter;

const MainCards = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding-top: 4rem;
  height: 100%;
  text-align: center;
`;

const Card = styled.div`
  padding: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: center;
  border: solid gray 0.1rem;
  gap: 0.4rem;
`;

const TitleCard = styled.div`
  font-size: 2.5rem;
  color: #404553;
  width: 100%;
`;

const Category = styled.div`
  color: #66737c;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
