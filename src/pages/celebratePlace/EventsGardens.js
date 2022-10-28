import React, { useState, useEffect } from "react";

/// component CardEvent
import Card from "../../components/cardEvent/Card";

/// data
import data from "../../data/EventGardens.json";

// style components
import styled from "styled-components";

function EventsGardens() {
  const [dataGardens, setDataGardens] = useState([]);
  useEffect(() => {
    const result = data.filter((element) => element.want === "גן ואולם");
    setDataGardens(result);
  }, [data]);

  return (
    <MainCard>
      {dataGardens.map((card, index) => {
        return (
          <DivsSub key={index}>
            <Card card={card} index={index} />
          </DivsSub>
        );
      })}
    </MainCard>
  );
}

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

export default EventsGardens;
