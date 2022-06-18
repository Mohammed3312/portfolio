import React from "react";
import './Navigation.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserDelete} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage3Line} from 'react-icons/ri'
import { useState } from "react";




const Navigation = ()=>{
    const[activenav ,setactivenav] = useState('#')
    return(
        <nav>
            <a href="#" onClick={()=>setactivenav('#')} className={activenav=== '#' ? 'active':''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=> setactivenav('#about')} className={activenav=== '#about'? 'active':''} ><AiOutlineUserDelete/></a>
            <a href="#experience" onClick={()=> setactivenav('#experience')} className={activenav=== '#experience'? 'active':''}><BiBook/></a>
            <a href="#service" onClick={()=> setactivenav('#service')} className={activenav=== '#service'? 'active':''}><RiServiceLine/></a>
            <a href="#contact" onClick={()=> setactivenav('#contact')} className={activenav=== '#contact'? 'active':''}><RiMessage3Line/></a>
        </nav>
    )
}







export default Navigation;