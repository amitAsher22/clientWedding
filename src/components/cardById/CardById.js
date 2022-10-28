import React, { useMemo } from "react";
/// react-router-dom
import { useParams } from "react-router-dom";

/// get data
import data from "../../data/EventGardens.json";

/// get style components
import styled from "styled-components";

function CardById() {
  const params = useParams();
  const idUser = params.idUser;

  const eventData = useMemo(
    () => data.find((eventObj) => eventObj.id === idUser),
    [idUser]
  );

  return (
    <Container>
      <img src={eventData.imageCover} alt="img" width="100%" />
      <SectionDivOne>
        <DivRight className="right">{eventData.title}</DivRight>
        <DivLeft className="left">
          <Section className="one">
            <Title>אני רוצה..</Title>
            <Span>{eventData.want}</Span>
          </Section>
          <Section className="two">
            <Title>קונספט</Title>
            <Span>{eventData.concept}</Span>
          </Section>
          <Section className="three">
            <Title>כמה מוזמנים</Title>
            <Span>{eventData.guests}</Span>
          </Section>
          <Section className="Four">
            <Title> מתי</Title>
            <Span>{eventData.when}</Span>
          </Section>
          <Section className="five">
            <Title> כשרות</Title>
            <Span>{eventData.cosher}</Span>
          </Section>
        </DivLeft>
      </SectionDivOne>
    </Container>
  );
}

export default CardById;

const Container = styled.div``;
const SectionDivOne = styled.div`
  display: flex;
  background: white;
  width: 70%;
  margin: auto;
  height: 9rem;
`;

const DivRight = styled.div`
  background: red;

  width: 30%;
  height: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const DivLeft = styled.div`
  background: yellow;
  display: flex;

  width: 70%;
  height: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
`;

const Section = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem;
`;

const Span = styled.span`
  margin: auto;
  padding: 0px;
  color: #66737c;
  font-size: 1.5rem;
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 2rem;
  color: #404553;
`;
