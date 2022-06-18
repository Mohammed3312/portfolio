import React from "react";
import"./Protofolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
    {
        id:1 ,
        image:IMG1 ,
        title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        github : 'https://github.com' ,
        demo : "https://dribbble.com/Alien_pixels"
    }
    ,
    {
        id:2 ,
        image:IMG2 ,
        title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        github : 'https://github.com' ,
        demo : "https://dribbble.com/Alien_pixels"
    }
,
{
    id:3 ,
    image:IMG3 ,
    title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    github : 'https://github.com' ,
    demo : "https://dribbble.com/Alien_pixels"
}
,
{
    id:4 ,
    image:IMG4 ,
    title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    github : 'https://github.com' ,
    demo : "https://dribbble.com/Alien_pixels"
}
,  {
    id:5 ,
    image:IMG5 ,
    title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    github : 'https://github.com' ,
    demo : "https://dribbble.com/Alien_pixels"
}
,  {
        id:6 ,
        image:IMG6 ,
        title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        github : 'https://github.com' ,
        demo : "https://dribbble.com/Alien_pixels"
    }

]



const Protofolio = () =>{
    return(
        <section id="protofolio">
            <h5> My Recent Work</h5>
            <h2>Protfolio</h2>
            <div className="container protfolio__container">
                {
                    data.map(({id,image,title,github,demo})=>{
                      return(
                        <article key={id} className="protfolio__item">
                        <div className="protfolio__item-image">
                            <img src={image} alt={title}/>
                        </div>
                        <h3>{title}</h3>
                       <div className="portfolio__item-cta">
                       <a href={github} className="btn" target='_blank'>Github</a>
                        <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                       </div>
    
                    </article>
                      )
                    })
                }

                
            </div>

        </section>
    )
}








export default Protofolio ;