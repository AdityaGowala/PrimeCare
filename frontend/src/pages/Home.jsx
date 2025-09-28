import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'


const Home = () => {

  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <HowItWorks/>
      <Testimonials/>
      <Banner />
    </div>
  )
}

export default Home