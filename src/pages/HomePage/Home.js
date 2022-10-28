import React from "react";

/// components
import MiddleSectionHome from "../../components/home/MiddleSectionHome";
import LastSectionHome from "../../components/home/LastSectionHome";
import TopSectionHome from "../../components/home/TopSectionHome";

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
