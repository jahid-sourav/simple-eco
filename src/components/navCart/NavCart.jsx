import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import CartContext from "../../hooks/CartContext";

export default function NavCart() {
  const { cartItems } = useContext(CartContext);
  const cartItemsCount = cartItems.reduce(
    (totalCount, product) => totalCount + product.count,
    0
  );
  return (
    <div className="indicator">
      <span className="indicator-item badge badge-secondary">
        {cartItemsCount}
      </span>
      <button className="btn text-xl bg-green-300">
        <IoCartOutline />
      </button>
    </div>
  );
}
