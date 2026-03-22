import React from 'react'
import Hero from './Hero/Hero'
import Enumerate from './Enumerate/Enumerate'
import VideoBlock from './VideoBlock/VideoBlock'
import OurProduct from './OurProduct/OurProduct'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Enumerate/>
        <VideoBlock/>
        <OurProduct/>
    </div>
  )
}

export default Home