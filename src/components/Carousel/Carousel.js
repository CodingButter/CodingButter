import { createContext, useReducer } from "react"
import { CardsContainer, CardButtonContainer, CarouselButton, CarouselCard, CarouselContainer } from "./Carousel.element"
import {
      FaChevronRight,
      FaChevronLeft,
} from "react-icons/fa";
export const CarouselContext = createContext(0);
const Carousel = ({ contents, sideCards = 2, sizeDecay = 30 }) => {
      const cardReducer = (currentState, { action, index }) => {
            switch (action) {
                  case "forward":
                        currentState++;
                        if (currentState == contents.length) currentState -= contents.length
                        break;
                  case "backward":
                        currentState--;
                        if (currentState <= 0) currentState += contents.length
                  case "jump":
                        if (index >= 0 && index <= contents.length)
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

      return (
            <CarouselContainer>
                  <CardButtonContainer>
                        <CarouselButton onClick={() => dispatchCard({ action: "backward" })} direction="backward"><FaChevronLeft /></CarouselButton>
                        <CardsContainer >
                              {contents.map((child, index) => {
                                    let ActiveComponent = child.active.component;
                                    let InactiveComponent = child.inactive.component;
                                    let position = index
                                    let offset = index - currentCard;
                                    let depth = Math.abs(offset)
                                    offset = (offset / depth) * depth || 0
                                    if (offset >= contents.length / 2) offset -= contents.length
                                    else if (offset <= -contents.length / 2) offset += contents.length
                                    depth = Math.abs(offset)
                                    return (<CarouselCard onClick={() => depth<=2 && jumpToCard(index)} totalCards={contents.length} position={position} sizeDecay={sizeDecay} offset={offset} depth={depth} sideCards={sideCards} key={index}>{
                                          depth == 0 ? <ActiveComponent {...child.active.props} /> : <InactiveComponent {...child.inactive.props} />
                                    }</CarouselCard>)
                              })
                              }
                        </CardsContainer>
                        <CarouselButton onClick={() => dispatchCard({ action: "forward" })} direction="forward"><FaChevronRight /></CarouselButton>
                  </CardButtonContainer>
            </CarouselContainer>)
}

export default Carousel
