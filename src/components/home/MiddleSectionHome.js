import React from "react";

// style components
import styled from "styled-components";

function MiddleSectionHome() {
  return (
    <MainDiv>
      <SubMain>
        <SectionOne>
          <TitleSectionOne>הספקים שחיפשתם נמצאים ממש כאן</TitleSectionOne>
          <Paragraph>נכון שיש לנו הכי הרבה ספקים, אבל יותר חשוב -</Paragraph>
          <Paragraph>יש לנו אפשרויות חיפוש נוחות ומדויקות במיוחד</Paragraph>
          <Paragraph>שיעזרו לכם למצוא את הספק המושלם לכל תחום,</Paragraph>
          <Paragraph>לכל סגנון ובכל תקציב</Paragraph>
        </SectionOne>
        <SectionTwo>
          <Title>אריא</Title>
          <img src="/images/arya.png" alt="arya" />
        </SectionTwo>
      </SubMain>
    </MainDiv>
  );
}

export default MiddleSectionHome;

const MainDiv = styled.div`
  background: #fff4f4;
  width: 70%;
  margin: auto;
  padding: 4rem;
  -webkit-box-shadow: 0 15px 10px #777;
  -moz-box-shadow: 0 15px 10px #777;
  margin-bottom: 20%;
`;

const SubMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SectionOne = styled.div`
  font-size: 1.5rem;
  text-align: right;
  padding: 2rem;
`;

const SectionTwo = styled.div`
  background: white;
  width: 50%;
  height: 15rem;
  position: relative;
  right: -20rem;
  text-align: center;
`;

const Title = styled.p`
  text-align: right;
  font-size: 2rem;
  font-family: "RaananLight,Asap";
  letter-spacing: 0.5rem;
  color: #373c49;
`;

const TitleSectionOne = styled.span`
  font-weight: 100px;
  font-size: 5rem;
  letter-spacing: normal;
  color: #373c49;
`;

const Paragraph = styled.p`
  letter-spacing: 0.1rem; ; ;
`;
