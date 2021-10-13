import pwaImage from "../../public/images/pwa.svg";
import codeHeroW from "../../public/videos/Code.webm";
import codeHeroM from "../../public/videos/Code.mp4";
console.log(pwaImage);
export const homeObjOne = {
  lightBg: true,
  primary: true,
  imgStart: true,
  lightTopLine: true,
  lightTextDesc: true,
  lightText: true,
  topLine: "[...Love,...Knowledge]",
  headline: "Coding Smooth as Butter",
  buttonLabel: "Request a Quote",
  buttonLocation: "/consultation",
  description: "We take your projects from a concept to code!",
  start: "",
  alt: "image",
  imgPath: pwaImage,
  videoPaths: [codeHeroW, codeHeroM],
  shadow: 0.7,
};

export const homeObjTwo = {
  lightBg: true,
  primary: false,
  imgStart: false,
  lightTopLine: false,
  lightTextDesc: false,
  lightText: false,
  topLine: "[...Love,...Knowledge]",
  headline: "Coding Smooth as Butter",
  buttonLabel: "Get Started",
  description: "We take your projects from a concept to code!",
  start: "",
  alt: "image",
  imgPath: pwaImage,
};

export const homeObjThree = {
  lightBg: false,
  primary: true,
  imgStart: true,
  lightTopLine: true,
  lightTextDesc: true,
  lightText: true,
  topLine: "[...Love,...Knowledge]",
  headline: "Coding Smooth as Butter",
  buttonLabel: "Get Started",
  description: "We take your projects from a concept to code!",
  start: "",
  alt: "image",
  imgPath: pwaImage,
};

export const homeObjFour = {
  lightBg: true,
  primary: false,
  imgStart: false,
  lightTopLine: false,
  lightTextDesc: false,
  lightText: false,
  topLine: "[...Love,...Knowledge]",
  headline: "Coding Smooth as Butter",
  buttonLabel: "Get Started",
  description: "We take your projects from a concept to code!",
  start: "",
  alt: "image",
  imgPath: pwaImage,
};

export const dataSections = [homeObjOne, homeObjTwo, homeObjThree, homeObjFour];
