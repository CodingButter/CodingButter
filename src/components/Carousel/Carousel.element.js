import styled from "styled-components";
import { Container, Card, Button } from "../../globalStyles"

export const CarouselContainer = styled(Container)`
width:100%;
height:500px;
display:flex;
flex-direction:row;
max-width:100%;
align-items:center;
background:#f0f786;
background-size:cover;
`
export const CardsContainer = styled(Container)`
      width:30%;
      height:100%;
      position:relative;
`

export const CarouselButton = styled(Button)`
      z-index:10;
      display:flex;
      padding:20px;
      position:relative;
      border-radius:50%;
      align-items:center;
      background-color:rgba(255,255,255,.4);
      color:#333;
      font-size:35px;
      &:hover{
            color:#707070;
            background-color:rgba(0,0,0,.2);
      }
      & svg{
            padding-left:${({ direction }) => direction == "forward" ? "" : "-"}7px;
      }
`


export const CarouselCard = styled(Card)`
transition: 1s;
position:absolute;
z-index:${({ depth, sideCards }) => sideCards - depth};
top:calc(50%);
left: calc(50% + ${({ offset, sideCards }) => {
            const totalVisible = sideCards * 2 + 1
            return (100 / totalVisible) * offset
      }}%);
transform:scale(${({ depth, sideCards, sizeDecay }) => {
            const size = 100 - (depth / sideCards) * sizeDecay
            return size
      }}%) translate(-50%, -50%);
display:${({ depth, sideCards }) => depth > sideCards + 1 ? "none" : "block"};
opacity:${({ depth, sideCards }) => depth > sideCards ? 0 : 1};
transform-origin:0 0;
width:450px;
height:275px;
@media screen and (max-width: 950px) {
      width: 300px;
}

` 