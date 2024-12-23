import React from 'react'
import ShopHero from '../Components/ShopHero'
import AuthForms from '../Components/AuthForms'
import FeaturesSection from '../Components/FeaturesSec'

const page = () => {
  return (
    <div>
      <ShopHero title='My Account' location='My account' />
      <AuthForms/>
      <FeaturesSection/>
    </div>
  )
}

export default page
