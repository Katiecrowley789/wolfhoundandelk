import "./home.css"
import Header from "../../header/Header"
import homeimage from "./images/Homeimage.jpg"
import jerseys from "./images/jerseys.png"
import Slider from "../Slider"
import React from "react"
import 'animate.css';

export default function Home() {
  return (
    <> 
   <div className="home1">
     
        <Header/>
        <Slider/>
  
        <p className="texthome">At Wolfhound and Elk (W&E) we believe in embracing responsibility for our actions.  W&E are driven by the desire to create no compromise, high quality sport & activewear in an ethical sustainable manner.  W&E design and deliver customised products, alongside our W&E core collection and our esports range.<br></br><img className="homeimage" src={homeimage}alt=""/></p>
        
<img className="jerseys" src={jerseys}alt=""/>

<div class="row">
  <div class="column">
    <div class="homebox1">100% IRISH OWNED</div>
    <div class="homebox11">Located in Dublin,Ireland. W&E are supporting people, clubs and teams locally and internationally.W&E are an Irish sportswear brand who do things differently and are proud of it. </div>
    
  </div>
  <div class="column">
  <div class="homebox2">SUSTAINABLE</div>
  <div class="homebox22">W&E believe in being fully transparent therefore W&E only use certified suppliers from Europe, ensuring that the source plastic is fully traceable and our carbon footprint is minimized. </div>
  </div>
  <div class="column">
  <div class="homebox3">SUPPORTING YOU</div>
  <div class="homebox33">W&E are also fully committed to supporting youth participation in sport, and are working with clubs, schools and organistations that are growing our country’s pool of sporting talent.</div>
  </div>
</div>
<p className="texthome">
  <p className="texthomecomm">OUR COMMITMENT</p>
W&E know where, how, & who makes all of our products. Only using recycled or organically produced materials. Striving to minimize our impact on the world in which we live. 

W&E accept that this is only a first step forward but our team are committed on finding more sustainable solutions on our journey together. </p>


<div> <p>.</p></div>
</div>
</>
       
        
  )
}
