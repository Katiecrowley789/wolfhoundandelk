import React from './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topleft'>
        <img src="https://isteam.wsimg.com/ip/d86e0398-f90b-4f20-ba53-623143a76cfb/logomark_transparent.png/:/rs=w:128,h:128,cg:true,m/cr=w:128,h:128/qt=q:95" alt="logo" />
        <p>WOLFHOUND & ELK</p>
        </div>
    

        <div className='topcentre'></div>
            <ul className='toplist'><a className='linklist' href="/home">HOME</a></ul>
            <ul className='toplist'><a className='linklist' href="/about">ABOUT US</a></ul>
            <ul className='toplist'><a className='linklist' href="/sustainability">SUSTAINABILITY</a></ul>
            <ul className='toplist'><a className='linklist' href="/esports">ESPORTS</a></ul>

            <ul className='toplist'><a className='linklist' href="/customized">CUSTOMIZED</a></ul>
            <ul className='toplist'><a className='linklist' href="/shop">ESHOP</a></ul>
                 
        <div className='topright'>
           <i className="topSearchIcon fas fa-search"></i>
           <br>
           </br>
           <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search"/>
             </form>
             </div>
           <ul><i class="fa-solid fa-cart-shopping"></i></ul>
           <ul className='toplist'><a className='linklist' href="/Login">LOGIN</a></ul>
           
        </div>
    </div>
  )
}
