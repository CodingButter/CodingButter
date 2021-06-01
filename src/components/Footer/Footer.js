import React from 'react'
import {FooterContainer,FooterSubscription,FooterSubHeader,FooterSubText,Form,FormInput} from "./Footer.elements"
import {Button} from "../../globalStyles"
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
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
