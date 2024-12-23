import React from 'react'
import ShopHero from '../Components/ShopHero'
import FeaturesSection from '../Components/FeaturesSec'
import About from '../Components/About'

const page = () => {
  return (
    <div>

        <ShopHero title='About' location='Shop' />
        <About/>
        <FeaturesSection/>
      
    </div>
  )
}

export default page
