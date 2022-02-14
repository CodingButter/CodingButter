import React, { useContext } from "react";
import { InfoSection } from "../../components";
import { dataSections } from "./Data";
import { TwitchContext } from "../../hook/UseTwitchContext"
import Carousel from "../../components/Carousel/Carousel"
import Video from "../../components/Video/Video"
import { FullImage } from "../../globalStyles";

const Home = () => {
  const { streamclips, schedule } = useContext(TwitchContext);
  console.log(schedule)
  return (
    <>
      <InfoSection {...dataSections[0]} key={"Banner"} />
      <Carousel sizeDecay={10} contents={streamclips.map((clip, index) => {
        return {
          active: {
            component: Video,
            props: {
              id: clip.id
            }
          },
          inactive: {
            component: FullImage,
            props: {
              src: clip.thumbnail_url
            }
          }
        }
      })}>
      </Carousel>
    </>
  );
};

export default Home;
