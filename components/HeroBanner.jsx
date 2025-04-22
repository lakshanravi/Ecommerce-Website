
//urlFor is a function that helps to create a URL for the image. It is used to get the image from sanity. It is imported from the client.js file.
import { urlFor } from '../lib/client';
import Link from 'next/link';
import React from 'react';

//we are passing heroBanner as a prop to the HeroBanner component in the index.js file. it use to render the data from sanity. to diplay dynamic data
const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>

        {/* use capital letters for changing elements using sanity. Its easy to identify the dynamic components*/}


        {/* heroBanner.smallText to get data dynamically from sanity */}
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
      </div>
      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{heroBanner.desc} </p>
      </div>
      </div>

    </div>
  )
}

export default HeroBanner;