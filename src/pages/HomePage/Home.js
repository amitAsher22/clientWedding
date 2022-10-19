import React from "react";

/// components
import MiddleSectionHome from "../../components/UI/home/MiddleSectionHome";
import LastSectionHome from "../../components/UI/home/LastSectionHome";
import TopSectionHome from "../../components/UI/home/TopSectionHome";

function Home() {
  return (
    <>
      <TopSectionHome />
      <MiddleSectionHome />
      <LastSectionHome />
    </>
  );
}

export default Home;
