import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components/Index';

const Home = ({ products, bannerData }) => (
  <div>
    {/* below  JSX expression passing data (bannerData) as a prop to the <HeroBanner /> component . me aray ekt ek element ekai daanne..e element ek tynwd kyl tm check krnne*/}

    {/* It’s passing that first item from bannerData as a prop named heroBanner to the <HeroBanner /> component. */}
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">

      {/* here we are mapping through the products array and passing each product as a prop to the <Product /> component . we are calling product component*/} 
      {/* here product is the prop  */}
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);


  //then return the data as props
  return {
    props: { products, bannerData }
  }
}

export default Home;