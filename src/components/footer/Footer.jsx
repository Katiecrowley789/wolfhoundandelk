import React from './footer.css'

export default function Footer() {
  return (
    <div class="footer">
    <span className='footertext'>Copyright © 2022 Wolfhound & Elk - All Rights Reserved.</span>
    
    <div className="icon">
    <a href="https://www.facebook.com/wolfhoundandelk/"><i className="Icon fab fa-facebook-square"></i></a>
    <a href="https://www.instagram.com/wolfhoundandelk/"><i className="Icon fab fa-instagram-square"></i></a>
    <a href="https://www.linkedin.com/company/wolfhound/"><i className="Icon fa-brands fa-linkedin"></i></a>
    <a href="https://twitter.com/wolfhoundandelk"><i className="Icon fab fa-twitter-square"></i></a>
      </div>
      <br>
      
      </br>
      <span ><div className='footercentre'></div>
            <ul className='footerlist'>HOME</ul>
            <ul className='footerlist'>ABOUT US</ul>
            <ul className='footerlist'>SUSTAINABILITY</ul>
            <ul className='footerlist'>ESPORTS</ul>
            <ul className='footerlist'>CORE</ul>
            <ul className='footerlist'>CUSTOMIZED</ul>
            <ul className='footerlist'>SHOP</ul>
            </span>
        
 
    </div>

  )
}
