import React from 'react'
import CartPage from '../Components/Cart'
import ShopHero from '../Components/ShopHero'
import FeaturesSection from '../Components/FeaturesSec'

const page = () => {
  return (
    <div>
      <ShopHero title='Cart' location='cart' />
      <CartPage/>
      <FeaturesSection/>
    </div>
  )
}

export default page
