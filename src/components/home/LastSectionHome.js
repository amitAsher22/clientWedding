import React from "react";

// style components
import styled from "styled-components";

/// from file images > {all images}
import img1 from "../../imges/imgOne.jpeg";
import img2 from "../../imges/imgTwo.jpeg";
import img3 from "../../imges/man.jpeg";
import img4 from "../../imges/photo.jpeg";

/// components style
import LinkImg from "../home/LinkImg";

function LastSectionHome() {
  return (
    <SectionDiv>
      <Right>
        <TiTleRight>מה זו השראה לחתונה?</TiTleRight>
        <Paragraph>
          לראות תמונות של שמלות כלה מיוחדות, להכיר סגנונות חדשים של בגדי חתן,
          לקבל רעיונות מפתיעים לאיפור ושיער, וגם לעצור לרגע מהמרוץ של הפקת חתונה
          וליהנות מכל מה שיפה. גלריות התמונות של אתר מתחתנים יעשו לך טוב בלב
        </Paragraph>
      </Right>
      <Left>
        <DivImg>
          <LinkImg img={img1} page="EventsGardens" />
          <LinkImg img={img2} page="Stills" />
          <LinkImg img={img3} page="Catering" />
          <LinkImg img={img4} page="Bar" />
        </DivImg>
      </Left>
    </SectionDiv>
  );
}

export default LastSectionHome;

const SectionDiv = styled.div`
  width: 80%;
  background: red;
  margin: auto;
  margin-top: 2rem;
  background: #fff4f4;
  display: flex;
`;

const Left = styled.div`
  height: 100vh;
  width: 50%;
  padding: 3rem;
`;

const Right = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-self: center;
`;

const TiTleRight = styled.span`
  font-size: 5rem;
  letter-spacing: normal;
  color: #373c49;
`;
const Paragraph = styled.span`
  font-size: 2rem;
`;

const DivImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  gap: 2rem;
`;
