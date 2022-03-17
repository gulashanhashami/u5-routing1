
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
export const ProductsDetailsPage = () => {
let {id}=useParams();
  //fetch the data store in product as
const [product, setProducts] = useState([]);
const [productStatus, setProductStatus] = useState(true);

useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=>{
    setProducts(data);
    setProductStatus(false);
  });
}, [])

  return productStatus ?( 
     <NotFoundPage />
  ) :(
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img style={{width:"30%"}} src={product.image} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.title}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
            <p>Category : {product.category}</p>
            <p>Description : {product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
