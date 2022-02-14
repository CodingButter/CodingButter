import React, { useContext } from "react";
import { InfoSection } from "../../components";
import { dataSections } from "./Data";
import { TwitchContext } from "../../hook/UseTwitchContext"
import Carousel from "../../components/Carousel/Carousel"
import Video from "../../components/Video/Video"
const Home = () => {
  const { streamclips } = useContext(TwitchContext);
  console.log(streamclips)
  return (
    <>
      <InfoSection {...dataSections[0]} key={"Banner"} />
      <Carousel>
        {streamclips.map((clip, index) => <Video url={clip.embed_url} data-title={clip.title} key={index}>{index}</Video>)}
      </Carousel>
    </>
  );
};

export default Home;
