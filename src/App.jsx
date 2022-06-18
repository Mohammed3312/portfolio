import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Service from "./components/services/Services";
import Experience from "./components/experince/Experience";
import Contact from "./components/contact/Contact";
import Protofolio from "./components/protofolio/Protofolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/footer/Footer";








const App =()=>{
    return(
        <div>
      <Header/>
      <Navigation/>
      <About/>
      <Experience/>
      <Service/>
      <Protofolio/>
      <Testimonials/>
      <Contact />
      <Footer/>
      
     
      </div>
    )
}






export default App;