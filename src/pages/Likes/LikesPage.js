import React from "react";

// style components
import styled from "styled-components";

//// data
import data from "../../data/EventGardens.json";

/// card components
import Card from "../../components/cardEvent/Card";

function LikesPage() {
  console.log(data);
  return (
    <Container>
      <Card card={data} />
    </Container>
  );
}

export default LikesPage;

const Container = styled.div``;
