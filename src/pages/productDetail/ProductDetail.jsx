// import { useLoaderData, useParams } from "react-router-dom";

// export default function ProductDetail() {
//   const products = useLoaderData();
//   const { id } = useParams();
//   const idInt = parseInt(id);
//   const product = products.find((product) => product.id === idInt);

//   return <>{product.title}</>;
// }

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DefaultLoader from "../../components/defaultLoader/DefaultLoader"; // Import your DefaultLoader component

export default function ProductDetail() {
  const [loading, setLoading] = useState(true); // State to track loading
  const [product, setProduct] = useState(null); // State to store product data
  const products = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    // Simulate loading delay for 2 seconds
    const timer = setTimeout(() => {
      const product = products.find((product) => product.id === idInt);
      setProduct(product);
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, [idInt, products]);

  return (
    <>
      {loading ? (
        <DefaultLoader /> // Render loader if loading is true
      ) : (
        // Render product title once loading is complete
        <>{product ? product.title : "Product not found"}</>
      )}
    </>
  );
}
