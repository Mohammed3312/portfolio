import React from "react";
import CTA from "../CTA/CTA";
import Me from '../../assets/me.png'
import Headersocial from "../Header social/Headersocial";
import './Header.css'





const Header = () =>{
    return(
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mohammed Ashraf</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA/>
                <Headersocial />
                <div className="me">
                <img src={Me} alt=""></img>
            </div>
            <a href="#contact" className="scroll__down" > Scroll Dwon </a>
            </div>
        </header>

    )
}







export default Header;