import React, { useState } from "react";

// style components
import styled from "styled-components";

/// react-icons
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";

/// imges
import myImg from "../../imges/arya.png";

function Card() {
  const [like, setLike] = useState(true);
  return (
    <MainSrction>
      <OneCard>
        <DivImage>
          <img src={myImg} width="100%" height="100%" />
        </DivImage>
        <DivIcons>
          {like ? (
            <FcLike size={70} onClick={() => setLike(!like)} />
          ) : (
            <IoHeartDislikeOutline onClick={() => setLike(!like)} size={70} />
          )}
        </DivIcons>
        <DivText>
          <p>card1</p>
          <p>דוריה מתחם אירועים</p>
          <p>
            מתחם דוריה גאה להציג קונספט חדשני בעולם גני האירועים והאולמות בארץ.
            במתחם רחב ידיים הקמנו סביבת אירועים דינמית עם שלושה אזורים לאירועים
            בסגנונות שונים ובאווירה מותאמת לצרכים שלכם. רוצים אווירה כפרית
            ופסטורלית? לרשותכם יעמוד גן אירועים מרהיב ביופיו. מעדיפים שיק יוקרתי
            עם עיצובים מרהיבים וחדשניים? אתם מוזמנים לחגוג באולם האירועים
            המפואר. האמפי שלנו יתאים לכם אם אתם מתכננים אירועים ומופעי ענק. את
            הפסיפס הייחודי שלנו מעטרים שרידים ארכיאולוגיים של הגת הביזנטית
            שנתגלתה במקום. הם יוצרים נוף מסתורי וקסום למתחם כולו. כך, כל
            האפשרויות עומדות בפניכם, לכם נותר רק לפרוץ את גבולות המחשבה ולחגוג
            אירוע שכמותו טרם נראה. ואין יותר מושלם מלסיים את היום הזה בריזורט
            יוקרתי ולהתעורר לרצף פינוקים קסומים! בצמוד למתחם האירועים שוכן לו
            ריזורט נופש – דרים איילנד שמו. בו נפגשים כל עולמות הפינוק והלייף
            סטייל. *הטבה מיוחדת למתחתנים שלנו | לפרטי ההטבה התקשרו 08-670-5600
          </p>
        </DivText>
      </OneCard>
    </MainSrction>
  );
}

export default Card;

const MainSrction = styled.div`
  position: relative;
  display: flex;

  width: 80%;
  flex-wrap: wrap;
  margin: auto;
`;

const OneCard = styled.div`
  border: 0.2rem solid #fae0e0;
  box-shadow: 0 0 5px black;
  width: 350px;
  height: 500%;
  cursor: pointer;
  margin: auto;
`;

const DivImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: auto;
  object-fit: cover;
`;

const DivIcons = styled.div`
  text-align: left;
  position: relative;
  top: -3rem;
  left: 1rem;
`;

const DivText = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 1rem;
`;
