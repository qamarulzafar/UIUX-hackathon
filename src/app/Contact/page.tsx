import React from 'react'
import ShopHero from '../Components/ShopHero'
import FeaturesSection from '../Components/FeaturesSec'
import ContactPage from '../Components/Contact'

const page = () => {
  return (
    <div>

        <ShopHero title='Contact' location='Contact' />
        <ContactPage/>
        <FeaturesSection/>
      
    </div>
  )
}

export default page
