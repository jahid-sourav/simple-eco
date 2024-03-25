import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../hooks/CartContext";

export default function FeaturedCard({ product }) {
  const { id, title } = product;
  const { addProductToCart } = useContext(CartContext);
  const addToCart = () => {
    addProductToCart({ id, title });
  };
  return (
    <div className="p-2 rounded border border-gray-500">
      <Link to={`/product/${product.id}`} className="block mb-3">
        <img
          className="w-full h-[200px] object-cover rounded"
          src={
            product?.image
              ? product.image
              : "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          }
          alt="Image"
        />
      </Link>
      <Link
        to={`/product/${product.id}`}
        className="font-semibold text-black text-lg"
      >
        {product?.title ? product.title : "No Data Found"}
      </Link>
      <div className="flex items-center justify-between mt-3">
        <h6 className="font-medium text-green-500 text-lg">
          ${product?.price ? product.price : "No Data Found"}
        </h6>
        <h6 className="font-medium text-green-500 text-lg">
          {product?.category}
        </h6>
      </div>
      <div className="text-center">
        <button
          onClick={addToCart}
          className="px-5 py-2 bg-black text-white text-lg font-semibold rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
