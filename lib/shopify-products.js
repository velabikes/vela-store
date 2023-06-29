import React, { useEffect, useState } from "react";
import axios from "axios";

const ShopifyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vela-bikes-store.myshopify.com/admin/api/2022-04/products.json",
          {
            headers: {
              "X-Shopify-Access-Token": "952655b7618da7c0ea8472837ccc5076",
            },
          }
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching data from Shopify API", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          {product.variants.map((variant) => (
            <p key={variant.id}>
              Variant: {variant.title}, ID: {variant.id}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShopifyProducts;
