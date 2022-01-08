import React from "react";
import "./Products.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetch = () => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/products`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.error);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return isLoading ? (
    <p style={{ color: "green" }}>Loading...</p>
  ) : (
    <div className="Product-container">
      <div>
        <p>Name</p>
        <p>Price</p>
        <p>Details</p>
      </div>
      {products.map(({ name, price, id }) => {
        return (
          <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>
              <Link to={`/product/${id}`}>View Details</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}
