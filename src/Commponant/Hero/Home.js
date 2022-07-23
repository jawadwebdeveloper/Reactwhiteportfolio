import React from 'react'
import './Home.css'
import logo from "../pic/w3.jpeg"
import skil1 from "../pic/skill1.png"
import skil2 from "../pic/skill2.png"
import skil3 from "../pic/skill3.png"

import { Typewriter } from 'react-simple-typewriter'
const Home = () =>{
  return (
    <div>
        <section className='hero' id='home'>

            <div className='container f_flex top'>
                <div className='left top'>
                    <h3>WELCOME TO MY WORLD</h3>
                    <h1>HI, I'm <span>JD</span></h1>
                    <h2> a  
                         <span>
                        <Typewriter
                            words={[' Reactjs Developer', ' Frontend web Developer', ' Professinol Coder']}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span>

                    </h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                    <div className='hero_btn d_flex'>
                        <div className='col_1'>
                            <h4>FIND WITH ME</h4>
                            <div className='button'>
                                <button className='btn_shadow'>
                                    <i class='fab fa-facebook-f'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i class='fab fa-instagram'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i class='fab fa-linkedin-in'></i>
                                </button>
                            </div>
                        </div>
                        <div className='col_1'>
                            <h4>BEST SKILL ON</h4>
                            <button className='btn_shadow'>
                            <img src={skil1} alt='' />
                            </button>
                            <button className='btn_shadow'>
                            <img src={skil2} alt='' />
                            </button>
                            <button className='btn_shadow'>
                            <img src={skil3} alt='' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='right_img'>
                    <img src={logo} alt='' />
                    </div>
                </div>
            </div>

        </section>
        
        
    </div>
  )
}

export default Home