import React from 'react'
import ShopHero from '../Components/ShopHero'
import FeaturesSection from '../Components/FeaturesSec'
import CheckoutForm from '../Components/CheckoutForm'


const page = () => {
  return (
    <div>
      <ShopHero title='Checkout' location='checkout ' />
      <CheckoutForm/>
      <FeaturesSection/>
    </div>
  )
}

export default page
