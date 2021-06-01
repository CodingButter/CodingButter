import {FaFacebook,FaTwitter,FaInstagram,FaTwitch,FaGithub,FaYoutube} from 'react-icons/fa'
export const logoImage = require('./public/images/logo.jpg')
export const allSocialMediaLinks = [
    {
        site:"Facebook",
        url:"https://facebook.com/codingbutter",
        faIcon:()=>(<FaFacebook/>)
    },
    {
        site:"Twitter",
        url:"https://twitter.com/codingbutter",
        faIcon:()=>(<FaTwitter/>)
    },
    {
        site:"Instagram",
        url:"https://instagram.com/codingbutter",
        faIcon:()=>(<FaInstagram/>)
    },
    {
        site:"Twitch",
        url:"https://twitch.tv/codingbutter",
        faIcon:()=>(<FaTwitch/>)
    },
    {
        site:"Github",
        url:"https://github.com/codingbutter",
        faIcon:()=>(<FaGithub/>)
    },
    {
        site:"Youtube",
        url:"https://youtube.com/codingbutter",
        faIcon:()=>(<FaYoutube/>)
    }
]
