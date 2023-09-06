import {  useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import * as productsAPI from '../../utilities/products-api';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [productItem, setProductItem] = useState(null)

  useEffect(() => {
    async function getProductDetails() {
        const product = await productsAPI.getProductById(productId);
        setProductItem(product);
    }
      getProductDetails();
  }, [productId]);
  
    return (
        <>
        { productItem ? 
        <h1>{productItem.name} Details</h1>
            :
            <h1>Error</h1>
        }
           {/* <p>${productItem.price}</p> 
            <p>{productItem.description}</p> */}
           <ReviewForm productId={productId} />
        </>
    )
  }

