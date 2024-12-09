import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import SiteTable from './Components/SiteTable'
import TopPicksOfyou from './Components/TopPicksOfyou'
import Newarrival from './Components/Newarrival'
import OurBlog from './Components/OurBlog'
import Insta from './Components/Insta'
import Footer from './Components/Footer'




const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <SiteTable/>
      <TopPicksOfyou/>
      <Newarrival/>
      <OurBlog/>
      <Insta/>
      <Footer/>
    </div>
  )
}

export default page
