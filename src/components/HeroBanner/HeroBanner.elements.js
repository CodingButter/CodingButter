import styled from "styled-components";

export const HeroBannerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #777;
  z-index: 0;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    z-index: 1;
    background: rgba(0, 0, 0, ${({ shadow }) => shadow});
  }
`;

export const HeroBannerVideo = styled.video`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;
