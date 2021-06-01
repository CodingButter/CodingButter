import React from 'react'
import {FooterContainer,FooterSubscription,FooterSubHeader,FooterSubText} from "./Footer.elements"
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeader>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeader>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
