import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family:'Source Sans Pro', sans-serif;
        -webkit-user-drag: none;
    }
`;

export const Container = styled.div`
  z-index: 2;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Card = styled.div`
  background: #101522;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 40%);
  color: white;
`
export const FullImage = styled.img`
  width:100%;
  height:100%;
`
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4b59f7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#0467FB" : "#4b59f7")};
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export default GlobalStyle;
