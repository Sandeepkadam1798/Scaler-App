import React from 'react'
import Curriculum from '../Components/sections/Curriculum'
import Reviews from '../Components/sections/Reviews'
import Teaching from '../Components/sections/Teaching'
import Mentorship from '../Components/sections/Mentorship'
import Community from '../Components/sections/Community'
import Careers from '../Components/sections/Careers'
import Hero from '../Components/Hero'

const Home = () => {
  return (
    <>
    <Hero/>
    <Curriculum/>
    <Reviews/>
    <Teaching />
    <Mentorship />
    <Community/>
    <Careers/>
    

    </>
  )
}

export default Home