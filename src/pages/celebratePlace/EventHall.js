import React, { useState, useEffect } from "react";

// style components
import styled from "styled-components";

/// get data
import data from "../../data/EventGardens.json";

///components
import Card from "../../components/cardEvent/Card";

function EventHall() {
  const [dataEvent, setDataEvent] = useState([]);

  useEffect(() => {
    const resultAfterFilter = data.filter((element) => element.want === "אולם");
    setDataEvent(resultAfterFilter);
  }, [data]);

  return (
    <MainCard>
      {dataEvent.map((card, index) => {
        return (
          <DivsSub key={index}>
            <Card card={card} />
          </DivsSub>
        );
      })}
    </MainCard>
  );
}

export default EventHall;

const MainCard = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 3rem;
  gap: 1.5rem 0px;
`;

const DivsSub = styled.div`
  width: calc(100% * (1 / 4));
`;
