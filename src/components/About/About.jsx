import React from "react";
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'





const About =() =>{
    return(
        <section id="about">  
        <h5>get to know</h5>  
        <h2>about me</h2>
        
        <div className="container  about__container">
        <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="about image" />
            </div>


        </div>
        <div className="about__content">
            <div className="about__cards"> 
            <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>experience</h5>
                <small>less than a year</small>
            </article>

            <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>clients</h5>
                <small>none yet</small>
            </article>

            <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>projects</h5>
                <small>none yet</small>
            </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus a similique 
                laborum quia sint ipsum velit tenetur nihil quam
                 porro magni tempora reprehenderit, aspernatur necessitatibus modi molestiae ab perferendis.</p>
            <a href="#contact" className="btn btn-primary" >Let's Talk</a>
        </div>
        </div>

        </section>
    )
}





export default About ;