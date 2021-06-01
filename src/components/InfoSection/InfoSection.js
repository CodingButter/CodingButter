import React from 'react'
import { Link } from 'react-router-dom'
import { InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle,ImgWrapper,Img } from "./InfoSection.elements"
import { Container,Button } from "../../globalStyles"


function InfoSection(
    {
        primary,lightBg,imgStart,
        lightTopLine,lightTextDesc,lightText,
        topLine,headline,buttonLabel,description,
        imgPath,start,alt,sectionLink
    }) {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to={sectionLink || '/'}>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img alt={alt} src={imgPath}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
