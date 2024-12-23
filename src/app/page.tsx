import React from 'react'
import Hero from './Components/Hero'
import SiteTable from './Components/SiteTable'
import TopPicksOfyou from './Components/TopPicksOfyou'
import Newarrival from './Components/Newarrival'
import OurBlog from './Components/OurBlog'
import Insta from './Components/Insta'





const page = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <SiteTable/>
      <TopPicksOfyou heading='Top Picks For You'/>
      <Newarrival/>
      <OurBlog/>
      <Insta/>
    </div>
  )
}

export default page
