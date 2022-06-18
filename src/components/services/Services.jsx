import React from "react";
import{HiCheck} from'react-icons/hi'
import'./Services.css'





const Service = () =>{
    return(
        <section id="service">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container sevices__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Ui/Ux Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* end of article */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* end of article */}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* end of article */}
            </div>
        </section>
    )
}




export default Service;