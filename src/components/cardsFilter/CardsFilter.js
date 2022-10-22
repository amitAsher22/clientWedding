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
  width: 80%;
  margin: auto;
  padding-top: 4rem;
`;

const Card = styled.div`
  border: 2px solid black;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  flex-flow: center;
`;
