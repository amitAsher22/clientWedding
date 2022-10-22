import React from "react";

/// component CardEvent
import Card from "../../components/cardEvent/Card";

/// data
import data from "../../data/EventGardens.json";

function EventsGardens() {
  return (
    <div>
      <p>EventsGardens</p>
      {data.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}

export default EventsGardens;
