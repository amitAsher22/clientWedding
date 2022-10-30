import React, { useMemo } from "react";
/// react-router-dom
import { useParams } from "react-router-dom";

/// get data
import data from "../../data/EventGardens.json";

/// get style components
import styled from "styled-components";

/// react icons
import { BsTelephone } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";

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
      <SectionDivTwo>
        <RightDiv>
          <TitleSectionTwo>{eventData.title}</TitleSectionTwo>
          <DescriptionEvent>{eventData.description}</DescriptionEvent>
        </RightDiv>
        <LeftDiv>
          <DivTitleAndIcon>
            <BsTelephone />
            <SpanTitle>{eventData.number}</SpanTitle>
          </DivTitleAndIcon>
          <DivTitleAndIcon>
            <GrLocation />
            <SpanTitle> {eventData.location} </SpanTitle>
          </DivTitleAndIcon>
          <DivTitleAndIcon>
            <CgWebsite />
            <SpanTitle>לאתר במתחתנים </SpanTitle>
          </DivTitleAndIcon>
        </LeftDiv>
      </SectionDivTwo>
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
  width: 30%;
  height: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border: 2px solid #f8f8f8;
  font-size: 2rem;
  color: #404553;
`;

const DivLeft = styled.div`
  display: flex;
  width: 70%;
  text-align: center;
  margin: auto;
  height: 100%;
`;

const Section = styled.div`
  border: 2px solid #f8f8f8;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.7rem;
  height: 100%;
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

const TitleSectionTwo = styled.div`
  color: #404553;
  font-family: RaananLight, Asap;
  font-size: 3rem;
`;

const DescriptionEvent = styled.p`
  font-size: 1.2rem;
`;

const SectionDivTwo = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  padding: 1rem;
  background: white;
`;

const RightDiv = styled.div`
  width: 70%;
`;
const LeftDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
`;

const DivTitleAndIcon = styled.div`
  display: flex;
  gap: 1rem;
  font-family: RaananLight, Asap;
  align-items: center;
`;

const SpanTitle = styled.span`
  font-size: 2rem;
`;
