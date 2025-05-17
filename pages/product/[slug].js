//slug is unique identifier belongs to each product.
//product ek click klm me page ekt redirect wenna hdnne product.jsx ek mgin

import { urlFor, client } from "../../lib/client";
import React ,{useState} from "react";
import { AiOutlineMinus,AiOutlinePlus,AiFillStar,AiOutlineStar } from "react-icons/ai";
import { Product } from "../../components/Index";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  //prop is destructured below. then we no need to repaet product.image,  likewise
  const { image, name, details } = product;
  const [index, setIndex] = useState(0); //initially show 0th image


  //me function define kla Statecontext file eke. than hook ekk wge use krnn puluwn
  const {decQty,incQty,qty,onAdd} = useStateContext(); //importing the context to use the functions in it.

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>

          {/* //below one is used to show the details of the product.color wenas product ehm select krnn */}
          <div className='small-images-container'>
          {image?.map((item,i) => (
            <img key={i} src={urlFor(item)} className={i=== index?'small-image selected-image':'small-image'} onMouseEnter={()=>setIndex(i)}/>
          ))}

        </div> 
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />

            </div>
            <p>(20)</p>

          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">Rs {product.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num" onClick="">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
        </div>
        <div className="buttons">  
          <button type="button" className="add-to-cart" onClick={()=>onAdd(product,qty)}>Add to Cart
            </button>
          <button type="button" className="buy-now" onClick="">Buy Now</button>
        </div>
      </div>
    </div>
    <div className="maylike-products-wrapper">
      <h2>You may also like</h2>
      {/* //below marquee is used to show the products in a scrolling manner. */}
      <div className="marquee">
        <div className="maylike-products-container track">
          {products.map((item) => (
            <Product key={item._id}
            product={item}/>

          ))}
        </div>
      </div>


    </div>
    </div>
  );
};

//this is a dynamic route. It will be used to fetch the data of the product that is clicked on.
// getStaticProps is special nextjs function that is used to fetch data at build time.
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
  slug {
    current
  }
}`;

  const products = await client.fetch(query);
  //this will return an array of objects with the slug of each product.

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));
  return {
    paths,
    fallback: "blocking", //if the page is not generated at build time, it will be generated on the first request.
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  // used to get the data of the product that is clicked on.

  //This GROQ query fetches one product from Sanity CMS that matches the URL slug.
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  //Fetches all products,  to show in a "You may also like" section.
  const productQuery = `*[_type == "product"]`;

  const product = await client.fetch(query);
  const products = await client.fetch(productQuery);

  console.log(product);

  //then return the data as props
  return {
    props: { products, product },
  };
};
export default ProductDetails;
