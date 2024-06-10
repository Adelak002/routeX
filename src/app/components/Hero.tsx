import React from 'react'
import HeroCard from './ui/HeroCard'
import Hero2 from './Hero2'
import Wanderlust from './Wanderlust'

const Hero = () => {
  return (
    <div className=' flex flex-wrap justify-center items-center'>
    <HeroCard/>
    <Hero2/>
    <Wanderlust/>

    </div>
  )
}

export default Hero