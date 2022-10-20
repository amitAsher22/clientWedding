import React from "react";

/// data
import { cards } from "./data";

// style components
import styled from "styled-components";

import { Outlet } from "react-router-dom";

function CardsFilter() {
  return (
    <>
      <MainCards>
        {cards.map((card) => (
          <Card key={card.title}>
            <p>{card.title}</p>
            <sapn>{card.category1}</sapn>
            <sapn>{card.category2}</sapn>
            <sapn>{card.category3}</sapn>
            <sapn>{card.category4}</sapn>
            <sapn>{card.category5}</sapn>
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
  width: 100%;
  margin-top: 10rem;
  flex-flow: center;
  justify-content: center;
`;

const Card = styled.div`
  border: 2px solid black;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  background-color: white;
  flex-flow: center;
`;
