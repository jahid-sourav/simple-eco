import { useContext } from "react";
import CartContext from "../../hooks/CartContext";

export default function Another() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="template-container py-6">
      <h2>{cartItems.length}</h2>
    </div>
  );
}
