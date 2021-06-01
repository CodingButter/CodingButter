import React, { useState,useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon, NavMenu,NavItem,NavLink,MobileIcon,NavBtnLink,NavItemBtn } from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { Button } from '../../globalStyles';
import { logoImage } from "../../globalData"
const Navbar = () => {
    const [ click, setClick ] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = ()=>{setClick(!click)}

    const showButton = () => {
        if (window.innerWidth <= 950) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    },[])

    window.addEventListener('resize',showButton)
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon src={logoImage.default} />
                            CodingButter
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/services">
                                    Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">
                                    Products
                                </NavLink>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>Consultation</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig primary>
                                                Schedule A Consultation
                                        </Button>
                                    </NavBtnLink>
                                )
                                }
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>    
        </>
    )
}

export default Navbar
