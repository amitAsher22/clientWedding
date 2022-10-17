import React from "react";

// style components
import styled from "styled-components";

/// from file images > {all images}
import img1 from "../../imges/imgOne.jpeg";
import img2 from "../../imges/imgTwo.jpeg";
import img3 from "../../imges/man.jpeg";
import img4 from "../../imges/photo.jpeg";

function SectionTree() {
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
          <Image src={img1} alt="img1" />
          <Image src={img2} alt="img2" />
          <Image src={img3} alt="img3" />
          <Image src={img4} alt="img4" />
        </DivImg>
      </Left>
    </SectionDiv>
  );
}

export default SectionTree;

const SectionDiv = styled.div`
  width: 60%;
  background: red;
  margin: auto;
  margin-top: 2rem;
  background: #fff4f4;
  display: flex;
`;

const Left = styled.div`
  background: red;
  width: 50%;
`;

const Right = styled.div`
  background: blue;
  width: 50%;
`;

const TiTleRight = styled.h1``;
const Paragraph = styled.p``;

const DivImg = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  grid-gap: 1rem;
`;

const Image = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
