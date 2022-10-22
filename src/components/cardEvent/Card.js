import React, { useState } from "react";

// style components
import styled from "styled-components";

/// react-icons
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";

function Card({ card }) {
  const [like, setLike] = useState(true);
  return (
    <MainSrction>
      <OneCard>
        <DivImage>
          <img src={card.image} width="100%" height="100%" alt="img2" />
        </DivImage>
        <DivIcons>
          {like ? (
            <FcLike size={70} onClick={() => setLike(!like)} />
          ) : (
            <IoHeartDislikeOutline onClick={() => setLike(!like)} size={70} />
          )}
        </DivIcons>
        <DivText>
          <p>{card.location}</p>
          <p>{card.title}</p>
          <p>{card.description}</p>
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
  background: red;
`;

const OneCard = styled.div`
  border: 0.2rem solid #fae0e0;
  box-shadow: 0 0 5px black;
  width: 250px;
  height: 400%;
  cursor: pointer;
  margin: auto;
  background: blue;
`;

const DivImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
`;

const DivIcons = styled.div`
  position: relative;
  text-align: left;
  color: white;
  top: -2rem;
  left: 1rem;
`;

const DivText = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 1rem;
`;
