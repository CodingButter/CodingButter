import React from 'react'
import {FooterContainer,FooterSubscription,FooterSubHeader,FooterSubText,
    Form,FormInput,FooterLinksContainer,FooterLinksWrapper,FooterLinksItems,
    FooterLink,FooterLinkTitle,SocialMedia,SocialMediaWrap,
    SocialMediaLogo,WebsiteRights,SocialMediaIcons,SocialMediaIcon,SocialMediaIconLink} from "./Footer.elements"
import {Button} from "../../globalStyles"
import {logoImage,allSocialMediaLinks} from '../../globalData'

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
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>  
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/consultation'>Schedule a Consultation</FooterLink>
                        <FooterLink to='/current-projects'>Current Projects</FooterLink>
                        <FooterLink to='/testimonials'>Testimonials</FooterLink>
                        <FooterLink to='/investors'>Investors</FooterLink>
                        <FooterLink to='/tos'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>  
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/consultation'>Schedule a Consultation</FooterLink>
                        <FooterLink to='/current-projects'>Current Projects</FooterLink>
                        <FooterLink to='/testimonials'>Testimonials</FooterLink>
                        <FooterLink to='/investors'>Investors</FooterLink>
                        <FooterLink to='/tos'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialMediaLogo to="/">
                        <SocialMediaIcon src={logoImage.default}/>
                        CodingButter
                    </SocialMediaLogo>
                    <WebsiteRights>CodingButter © 2021</WebsiteRights>
                    <SocialMediaIcons>
                        {
                            allSocialMediaLinks.map(({site,url,faIcon},socialMediaLinkKey)=>(
                                <SocialMediaIconLink href={url} target="_blank" aria-label={site} key={socialMediaLinkKey}>
                                    {faIcon()}
                                </SocialMediaIconLink>
                            ))
                        }
                    </SocialMediaIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
