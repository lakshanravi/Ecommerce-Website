import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components/Index';


const Home = () => {
  return (
    <>
    <HeroBanner/>
   <div className='products-heading'>
    <h2>Best Selling Products</h2>
    <p>Speakers of mant variations</p>
    
    <div className='products-container'>
      {/* product array. passe sanity eken arn hdnw */}

      {/* map((product) => product) → Goes through each item and returns it (unchanged). */}
  
      {['Product 1', 'Product 2'].map((product) => product)}  
    </div>
    </div> 
  Footer
    </>
  )
}

export default Home;
