import React from 'react'
import action from "./images/action.jpg"
import logo2 from "./images/logo1.jpg"
import "./sustainability.css"
import sus1 from "./images/sus1.jpg"
import sus2 from "./images/sus2.jpg"
import sus3 from "./images/sus3.jpg"
import sus4 from "./images/sus4.jpg"
import sus5 from "./images/sus5.jpg"
import sus6 from "./images/sus6.jpg"

export default function Sustainability() {
  return (
    <>
    
    <div className="sustainability"> 
    <div className="topsus">
    <img className="logo2" src={logo2}alt=""/>
    <span className="Titlebig">WOLFHOUND & ELK</span>
    <span className="Textintro"><b>SUSTAINABILITY</b></span>
    </div>
    </div>
    <img className="action" src={action}alt=""/>
   
    <span className="sustitle">SUSTAINABLE - ETHICAL - RESPONSIBLE</span>
    <span className='sustext'>Our Commitment To You<br></br>
Within our control is the choice of fabrics, our manufacturing partners and suppliers as well as our transport providers. Every decision impacts the sustainability credentials of our clothing. 


<br></br>
ETHICAL PARTNER SELECTION
<br></br>
W&E have taken time to know our partners, meet their staff, and visit their facilities. Currently we only use two manufacturing partners, both are family run businesses and both have over 20 years of experience in the textiles industry. With only two partners, it allows us to maintain an ability to control every element of our supply chain, to maintain the highest standards and to restrict our carbon footprint as much as possible. Naturally, our choices to date have also been based on quality and performance.


<br></br>
RECYCLED MATERIALS
<br></br>
W&E use recycled polyester, taking plastic bottles from our oceans and landfill, and transforming them into high performance fabrics. Polyester is the most commonly used fabric on the planet and is a form of plastic made from petroleum products and coal. While its performance attributes are know in sport, how its made is less so. 

<br></br>

ORGANIC MATERIALS
<br></br>
W&E source 100% organic cotton to produce our products, using only biological fertilizers and natural pesticides. All processes (e.g. dyeing & printing) are environmentally friendly.
<br></br>
By using organic produced materials it means cleaner rivers and and helps prevent pollution of ground water. This is key to preserve both thriving wildlife and biodiversity. In addition, organic farming rebuilds soil and improves water absorption, preventing times of water shortage and make farmers less vulnerable to climate change.

<br></br>

ALIGNMENT NOW & GOING FORWARD
W&E believe our partners share the same ethos and are helping us evolve to find more sustainable solutions.
In addition, relationships with sustainable pioneers and universities allows W&E to evolve our offering. </span>
<br></br>
<span className="sustitle">OUR PARTNERS ARE CERTIFIED</span>
<div class="susrow">
  <div class="suscolumn">
  <img className="sus1" src={sus1}alt="" />
  <span className='sustext'>Working with our manufacturing partners to use renewable energy sources when possible, that way making our clothing contributes to a cleaner environment and fights climate change.  In addition at times of surplus,  energy not needed for production at one of our main manufacturers is directed to local networks.</span>

  </div>
  <div class="suscolumn">
  <img className="sus5" src={sus5}alt="" />
  <span className='sustext'>Our partners manufacture our clothing and materials in accordance with the Fairwear Foundation Standard, an international verification standard dedicated to protect workers.

Our standards are based on the principles of international human rights. Focussed on eight key areas: child labour, forced labour, health and safety, free association and collective bargaining, discrimination, disciplinary practices, working hours and compensation.</span>
 
  </div>
  <div class="suscolumn">
  <img className="sus3" src={sus3}alt="" />
  <span className='sustext'>The Oeko-Tex 100 Standard comprehensively addresses the human ecology component of textile products. It evaluates and screens for any harmful substances present within processed textiles, which are intended to come into contact with consumers.</span>
  </div>
</div>
<div class="susrow">
  <div class="suscolumn">
  <img className="sus4" src={sus4}alt="" />
  <span className='sustext'>100% organic cotton by GOTS Sustainable Textile methods certified and inspected by Control Union. The aim of the standard is to ensure the textiles are made using raw organic materials and environmentally and socially responsible methods.</span>

  </div>
  <div class="suscolumn">
  <img className="sus2" src={sus2}alt="" />
  <span className='sustext'>100% Recycled Polyester by Global Recycled Standard certified and inspected by Control Union. The goal of the GRS is to increase use of Recycled materials in products and reduce/eliminate the harm caused by its production</span>
  
   </div>
  <div class="suscolumn">
  <img className="sus6" src={sus6}alt="" />
  <span className='sustext'>The official EU label for Greener Products. Ecolabelled products have a comparatively modest impact on air, water, soil, quality, natural resource consumption, global warming and biodiversity. Products must pass rigorous tests with results verified by an independent body. The label adorns top performing products only.</span>
  </div>
</div>

    </>
  )
}
