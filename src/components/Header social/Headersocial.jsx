import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {GrGithub} from 'react-icons/gr'
import {BsDribbble} from 'react-icons/bs'


const Headersocial = () =>{
    return(
        <div className="Header__socials">
            <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/Mohammed3312" target='_blank'><GrGithub/></a>
            <a href="https://dribbble.com" target='_blank'><BsDribbble/></a>


        </div>
    )
}




export default Headersocial;