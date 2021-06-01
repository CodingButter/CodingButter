const pwaImage = require("../../public/images/pwa.svg");

export const homeObjOne = {
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
  imgPath: pwaImage.default,
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
  imgPath: pwaImage.default,
};

export const dataSections = [homeObjOne, homeObjTwo];
