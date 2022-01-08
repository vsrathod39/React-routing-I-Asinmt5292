import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

export default function ProductDetails() {
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();

  const fetch = () => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
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
    <div className="ProductDetails-container">
      <div>
        <div>
          <p>Product Picture</p>
        </div>
        <div>
          <p>{product.name}</p>
          <p>INR: {product.price}</p>
          <p>Discription: {product.discription}</p>
        </div>
      </div>
    </div>
  );
}
