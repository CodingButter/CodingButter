import React from "react";
import { InfoSection } from "../../components";
import { dataSections } from "./Data";

const Home = () => {
  return (
    <>
      {dataSections.map((section, sectionKey) => (
        <InfoSection {...section} key={sectionKey} />
      ))}
    </>
  );
};

export default Home;
