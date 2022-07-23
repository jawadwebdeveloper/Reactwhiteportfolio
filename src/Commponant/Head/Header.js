 import React, { useState } from 'react'
import "./Header.css"
import logo from "../pic/logoj.png"
const Header = () =>{

    // when scroll header at top postion
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header")
        header.classList.toggle("active",this.window.scrollY>100)
    })
    // togel menu
    const [Mobile,setMobile] = useState(false)

  return (
    <div>
        <header className='header'>
            <div className='container d_flex'>
                <div className='logo'>
                     <img src={logo} alt=""></img>
                     {/* <img src={logo} alt=""></img> */}
                     {/* IJ SoftTech */}
                </div>
                <div className='navlink'>
                     {/* <ul className='link f_flex uppercase'> */}
                    <ul className={Mobile ? "nav-link-mobile" : "link f_flex uppercase"} onClick={()=>setMobile(false)}>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#features'>Features</a></li>
                        <li><a href='#portfolio'>portfolio</a></li>
                        <li><a href='#resume'>resume</a></li>
                        <li><a href='#clients'>clients</a></li>
                        <li><a href='#blog'>blog</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        <li><button className="home-btn">BUY NOW</button></li>

                    </ul>
                    <button className='toggle' onClick={()=> setMobile(!Mobile)}>
                        {Mobile ?
                        
                        <i className='fas fa-times close home-btn'></i>
                        :
                        <i className='fas fa-bars open'></i>
                    }
                    </button>

                </div>
            </div>
        </header>

        <section className='demo'></section>
    </div>
  )
}

export default Header