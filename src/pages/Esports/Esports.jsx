import  "./esports.css"
import esportimage from "./images/sport.jpg"
import img51 from "./images/shirts.png"
import partner from "./images/partner.png"
import logo1 from "./images/logo1.jpg"
import wylde from "./images/wylde.png"
export default function Esports() {
  return (
    
    <>
    
    
    <div className="esport"> 
    <div className="top1">
    <img className="logo1" src={logo1}alt=""/>
    <span className="Titlebig">WOLFHOUND & ELK</span>
    <span className="Textintro"><b>ESPORTS COLLECTION</b></span>
   
    </div>
    <div className="esinformation">
    <span className="esportstext"><b>At W&E, recognize the force that esports and gaming is in modern life while recognizing that esports is fundamentally different.
        No uniform design template is in place but instead it offers a clear opportunity to break traditions & be brave. 
        
 </b><button class="button button5">SHOP ESPORTS</button></span>

    <img className="esportimage" src={esportimage}alt=""/>
    </div>
     <img className="wyldelogo" src={wylde}alt=""/>
   <div class="rowes">
  <div class="columnes">

    <div class="videobox"><iframe className="video" src="https://www.youtube.com/embed/w4kwLEY3_N0" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
    
  </div>
  <div class="columnes">
  <div class="wylde">OUR PARTNER</div>
  <div class="wylde1">    <img className="partner" src={partner}alt=""/> WYLDE is about What You Love Doing Esports
Created by the convergence of gaming, entertainment and a competitive sports culture, WYLDE is a new esports organisation with global ambition.<br></br><a href="https://wylde.gg/"><button class="button button5">WYLDE</button></a></div>
  </div>
    

</div>
<span className="sportshop"><b>ESPORTS COLLECTION</b></span>

    <div class="containere">
    <img className="img51" src={img51}alt="Avatar" class="image"/>
    <div class="overlaye">
    <div class="texte">SHOP NOW</div> 
    </div>
  </div>
<div><p>Back Page</p></div>
</div>
    
    </>
  )
}
