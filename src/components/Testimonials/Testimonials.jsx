import React from "react";
import "./Testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';




const data = [
    {
        avatar:AVTR1 ,
        name:'Tina Snow' ,
        review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ' 
      
    }
    ,
    {
        avatar:AVTR2 ,
        name:'Shatta Wale' ,
        review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ' 
      
    }
    ,{
        avatar:AVTR3 ,
        name:'Jhon Adams' ,
        review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ' 
      
    }
    ,{
        avatar:AVTR4 ,
        name:'Hana McBrwon' ,
        review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ' 
      
    }
]


const Testimonials = () =>{
    return(
        <section id="testimonial">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                  modules={[Pagination]}
                  spaceBetween={40}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}className="container testimonials__container">
              {
                  data.map(({avatar,name,review,index}) =>{
                      return(
                        <SwiperSlide key={index} className="testimonial">
                        <div className="clients__avatart">
                            <img src={avatar} alt={review} />
                        </div>
                        <h5 className="client__name">{name}</h5>
                            <small className="client__review"> {review}</small>
                    </SwiperSlide>
                      )
                  })
              }
              
            </Swiper>



        </section>
    )
}



export default Testimonials;