import React from 'react'
import Cards from './Cards'
import data from './FeaturesAPI'
import './Features.css'
const Features = () => {
  return (
    <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>

          <div className='content grid'>

                {data.map((val, index)=>{
                    return <Cards key={index} image={val.image} title={val.title} desc={val.desc} /> 
                })}
          
          </div>
        </div>
      </section>
  )
}

export default Features