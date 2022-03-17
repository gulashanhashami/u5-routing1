import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const HomePage = () => {
  //fetch the data store in product as array variable
  //then map the data to show on ui
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setProducts(data);
    //   console.log(data);
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }   
      }

      >
        {/* Iterate over products and show links */}
        {products.map((el) => {     /* Show product image and name */
          return <Link to={`/`} key={el.id}>
            <div id="homep">
                <img style={{width:"300px", height:"300px"}} src={el.image} alt="" />
                <h3>{el.title}</h3>
                <p>{el.category}</p>
                <h4>USD. {el.price}\-</h4>
              </div>
          </Link>;
        })}
      </div>
    </>
  );
};
