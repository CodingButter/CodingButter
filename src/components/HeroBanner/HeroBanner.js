import React from "react";
import {
  HeroBannerContainer,
  HeroBannerTexture,
  HeroBannerVideo,
} from "./HeroBanner.elements";

const HeroBanner = ({ videoPaths, shadow }) => {
  return (
    <HeroBannerContainer shadow={shadow}>
      <HeroBannerVideo preload='auto' autoPlay={true} muted loop={true}>
        {videoPaths.map((videoPath, videoPathKey) => (
          <source key={videoPathKey} src={videoPath} />
        ))}
      </HeroBannerVideo>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
