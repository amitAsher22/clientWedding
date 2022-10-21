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
            <p>{card.title}</p>
            <span>{card.category1}</span>
            <span>{card.category2}</span>
            <span>{card.category3}</span>
            <span>{card.category4}</span>
            <span>{card.category5}</span>
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
