import React from 'react'
import FAQ from '../../components/FAQ/FAQ.jsx'
import FooterBanner from '../../components/FooterBanner/FooterBanner'
import HeroSection from '../../components/HeroSection/HeroSection'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Journey from '../../components/Journey/Journey'
import MeetTeam from '../../components/MeetTeam/MeetTeam'
import OurCommitments from '../../components/OurCommitments/OurCommitments'
import OurWork from '../../components/OurWork/OurWork'
import Testimonial from '../../components/Testimonial/Testimonial'
import WorkedWith from '../../components/WorkedWith/WorkedWith'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <WorkedWith />
      <OurCommitments />
      <HowItWorks />
      <OurWork />
      <Journey />
      <MeetTeam />
      <Testimonial />
      <FooterBanner />
      <FAQ/>
    </div>
  )
}

export default Home