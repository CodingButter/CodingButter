import React from "react";
import {
  HeroBannerContainer,
  HeroBannerTexture,
  HeroBannerVideo,
} from "./HeroBanner.elements";

const HeroBanner = ({ videoPath, shadow }) => {
  return (
    <HeroBannerContainer shadow={shadow}>
      <HeroBannerVideo preload='auto' autoPlay={true} muted loop={true}>
        <source src={videoPath} />
      </HeroBannerVideo>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
