import React, { useState, useEffect } from "react";

/// component CardEvent
import Card from "../../components/cardEvent/Card";

// style components
import styled from "styled-components";

///axios
import axios from "axios";

function EventsGardens() {
  const [dataGardens, setDataGardens] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/suppliers").then((response) => {
      const result = response.data.filter(
        (element) => element.EventType === "eventsGardens"
      );
      setDataGardens(result);
    });
  }, []);

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
