import { urlFor } from '@/lib/client';

import Link from 'next/link';
import React from 'react'


const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div>
      {/* //below one points the slug of current product . slug is unique for each product*/}

      {/* src={urlFor(image && image[0] this one is used to get the image from sanity. */}

      {/* product ek click klama yata page ekt redirect wenn hdl tynne */}
      <Link href={`/product/${slug.current}`}>
      <div className="product-card">
        <img src={urlFor(image && image[0])}    width={250} height={250} className="product-image" />
        <p className="product-name">{name}</p>
        <p className="product-price">Rs {price}</p>
        
      </div>
      </Link>
    </div>
  )
}

export default Product;