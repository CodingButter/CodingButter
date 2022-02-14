import { useEffect, useReducer } from "react"
import { CardsContainer, CarouselButton, CarouselCard, CarouselContainer } from "./Carousel.element"
import {
      FaChevronRight,
      FaChevronLeft,
} from "react-icons/fa";

const Carousel = ({ children, sideCards = 2, sizeDecay = 30 }) => {
      const cardReducer = (currentState, { action, index }) => {
            switch (action) {
                  case "forward":
                        console.log(currentState)
                        currentState++;
                        if (currentState == children.length - 1) currentState = 0
                        break;
                  case "backward":
                        currentState--;
                        if (index == 0) currentState == children.length - 1
                  case "jump":
                        if (index >= 0 && index <= children.length)
                              currentState = index;
                        break;
                  default:
            }
            return currentState;
      }
      const [currentCard, dispatchCard] = useReducer(cardReducer, 0)

      const jumpToCard = (index) => {
            dispatchCard({ action: "jump", index })
      }

      return (<CarouselContainer>
            <CarouselButton onClick={() => dispatchCard({ action: "backward" })} direction="backward"><FaChevronLeft /></CarouselButton>
            <CardsContainer >
                  {children.map((child, index) => {
                        let position = index
                        let offset = index - currentCard;
                        let depth = Math.abs(offset)
                        offset = (offset / depth) * depth || 0
                        if (offset >= children.length / 2) offset -= children.length
                        else if (offset <= -children.length / 2) offset += children.length
                        depth = Math.abs(offset)
                        return (<CarouselCard onClick={() => jumpToCard(index)} totalCards={children.length} position={position} sizeDecay={sizeDecay} offset={offset} depth={depth} sideCards={sideCards} key={index}>{child}</CarouselCard>)
                  })
                  }
            </CardsContainer>
            <CarouselButton onClick={() => dispatchCard({ action: "forward" })} direction="forward"><FaChevronRight /></CarouselButton>
      </CarouselContainer>)
}
/*
[7][8][9][10][11]
*/
export default Carousel
