import  "./customized.css"
import React from "react"

import logo3 from "./images/logo3.jpg"

import photo5 from "./images/snip.JPG"
export default function Esports() {
  return (
    
    <>
     
  
    
    <div className="customized"> 
    <div className="top5">
    <img className="logo3" src={logo3}alt=""/>
    <span className="Titlebigcustom">WOLFHOUND & ELK</span>
    <span className="Textintrocustom"><b>CUSTOMIZED</b></span>
  
    <span className='sustext'>CUSTOM DESIGN
At W&E, our sportswear is designed for you. 

W&E understand that design, fit, & cut is not uniform.

W&E understand the underlying sports and the design differences needed for children, young adults, men, & women.



W&E strive to fully reflect your values through design.  </span>
    </div>


    <span className='sustext'>
    •	Custom team wear.
•	T-shirts, Jerseys, hoodies and more.
•	Choose the finest quality cotton materials.
•	Sustainably made.
•	Include custom colors, logos, patterns and more.
•	Perfect for large groups.</span>

    <img className="photo5" src={photo5}alt=""/>
    </div>
   
    </>
  )
}
