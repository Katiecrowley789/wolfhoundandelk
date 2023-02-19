import  "./about.css"
import logo1 from "../Esports/images/logo1.jpg"
import img23 from "./images/dog.JPG"
import about1 from "./images/about1.jpg"
import about2 from "./images/about2.jpg"
import about3 from "./images/about3.jpg"
import about4 from "./images/about4.jpg"
import about5 from "./images/about5.jpg"
import about6 from "./images/about6.jpg"

export default function About() {
  return (
    <>
    
    
    <div className="about"> 
    <div className="top1">
    <img className="logo1" src={logo1}alt=""/>
     <span className="Titlebig">WOLFHOUND & ELK</span>
    <span className="Textintro"><b>ABOUT US</b></span>
   
    </div>
    <div className="ourname">
        <span className="ournametitle"><b>Our name</b></span>
        <span className="ournametext"><b>
         <p> Our name embodies the spirit and soul of who we are and what we value.  We chose the name Wolfhound & Elk because it reflects the past, the present, and the future.</p>  
         <p>
    <br></br>
  </p><p>The Wolfhound is especially unique as it is so symbolic of Ireland and represents bravery, loyalty and guardianship.  Wolfhounds were specifically bred to perform and are brave, representing the athlete in us all.  We chose the ampersand to reinforce the sense of a sporting team but also our staff working together in finding a more responsible path forward.
  <p>
    <br></br>
  </p>
  </p> 

<p>The Irish Elk, the strongest, biggest animal ever to have graced Irish shores has been completely wiped from our island.  A beautiful and now, sadly extinct animal from our wild landscape, the Elk emerges as a symbol of fragility and what we lose if we don't look after the world around us.</p></b></span>
 <img className="img23" src={img23}alt=""/>
    
    </div>


    <div className="whatwedo">
      
        <span className="whatwedotitle"><b>OUR SPIRIT</b></span>



        <div class="aboutrow">
  <div class="aboutcolumn">
  <span className="abouttexttitle">TRANSPARENCY</span>
  <img className="about1" src={about1}alt="" />
  <span className='abouttext'>Establish ourselves at the forefront of sustainable sportswear & grow a business, built on social, ethical, & environmental transparency.</span>

  </div>
  <div class="aboutcolumn">
  <span className="abouttexttitle">TO INSPIRE</span>
  <img className="about5" src={about2}alt="" />
  <span className='abouttext'>To create an Irish sports brand that celebrates the heritage, spirit, & ambition of our Island.</span>
  </div>
  <div class="aboutcolumn">
  <span className="abouttexttitle">TO EDUCATE</span>
  <img className="about3" src={about3}alt="" />
  <span className='abouttext'>Motivate a generation to think & act more sustainably with regards to their clothing.</span>
  </div>
</div>
<div class="susrow">
  <div class="aboutcolumn">
  <span className="abouttexttitle">TO INNOVATE</span>
  <img className="about4" src={about4}alt="" />
  <span className='abouttext'>Constantly strive to discover better ways to produce our products, seeking more sustainable materials & manufacturing processes.</span>

  </div>
  <div class="aboutcolumn">
  <span className="abouttexttitle">TO PROTECT</span>
  <img className="about2" src={about5}alt="" />
  <span className='abouttext'>Manufacture our clothing in accordance with the Fairwear Foundation Standard, an international verification standard dedicated to protect workers.</span>
  
   </div>
  <div class="aboutcolumn">
  <span className="abouttexttitle">TO CONSERVE</span>
  <img className="about6" src={about6}alt="" />
 
  <span className='abouttext'>Uphold the highest safety & environmental standards. The fabric used in all our jerseys are Oeko-Tex Standard 100 & the Global Recycle Standard (GRS) certified.</span>
  </div>
</div>
        
    </div>
    </div>
    </>
  )
}
