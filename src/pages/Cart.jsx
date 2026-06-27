import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice } =
    useContext(CartContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🛒 तुमची Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart रिकामी आहे 😢</h3>
      ) : (
        cart.map((item, i) => (
          <div
            key={i}
            style={{
  border: "1px solid #ddd",
  margin: "10px auto",
  padding: "15px",
  width: "300px",
  borderRadius: "10px",
  background: "white"
}}
          >
            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <div>
              <button onClick={() => decreaseQty(item.name)}>➖</button>

              <span style={{ margin: "0 10px" }}>{item.qty}</span>

              <button onClick={() => increaseQty(item.name)}>➕</button>
            </div>

            <button onClick={() => removeFromCart(item.name)}>
              ❌ Remove
            </button>
          </div>
        ))
      )}

      <h2>Total Amount: ₹{totalPrice}</h2>
      <a href="/checkout">
  <button>🧾 Checkout </button>
</a>
    </div>
    
  );
}

export default Cart;