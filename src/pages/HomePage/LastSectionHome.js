import React from "react";

// style components
import styled from "styled-components";

function LastSectionHome() {
  return (
    <MainDiv>
      <SubMain>
        <SectionOne>
          <h1>הספקים שחיפשתם נמצאים ממש כאן</h1>
          <p>נכון שיש לנו הכי הרבה ספקים, אבל יותר חשוב -</p>
          <p>יש לנו אפשרויות חיפוש נוחות ומדויקות במיוחד</p>
          <p>שיעזרו לכם למצוא את הספק המושלם לכל תחום,</p>
          <p>לכל סגנון ובכל תקציב</p>
        </SectionOne>
        <SectionTwo>
          <p>אריא</p>
        </SectionTwo>
      </SubMain>
    </MainDiv>
  );
}

export default LastSectionHome;

const MainDiv = styled.div`
  background: #fff4f4;
  width: 80%;
  margin: auto;
  padding: 10rem;
`;

const SubMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SectionOne = styled.div``;

const SectionTwo = styled.div`
  background: white;
  width: 50%;
  height: 30rem;
`;
