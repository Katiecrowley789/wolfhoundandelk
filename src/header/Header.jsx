import "./header.css"
import 'animate.css';

import img10 from "./images/elk.png"

export default function header() {
  return (
    <>
    <div className='header'>
        <div className="headerTitles">
            
            <span className="Titlebigheader">Test</span>
            <span className="animate__animated animate__fadeInDown">Test2</span>
            <img className="img10" src={img10}alt=""/>
            <div className="icontop">
    <a href="https://www.facebook.com/wolfhoundandelk/"><i className="Icon fab fa-facebook-square"></i></a>
    <a href="https://www.instagram.com/wolfhoundandelk/"><i className="Icon fab fa-instagram-square"></i></a>
    <a href="https://www.linkedin.com/company/wolfhound/"><i className="Icon fa-brands fa-linkedin"></i></a>
    <a href="https://twitter.com/wolfhoundandelk"><i className="Icon fab fa-twitter-square"></i></a>

    
      </div>
   </div>
</div>

         
         </>
  )
}
