import React from "react";
import styled from "styled-components";

/// react-dom
import { Link } from "react-router-dom";

const LinkImg = ({ img, page }) => {
  return <StyledLink img={img} to={`/${page}`} />;
};

export default LinkImg;

const StyledLink = styled(Link)`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;
