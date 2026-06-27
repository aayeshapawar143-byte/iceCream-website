import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>🧾 Checkout Page</h1>

      {cart.length === 0 ? (
        <h3>Cart रिकामी आहे 😢</h3>
      ) : (
        <>
          <h2>तुमची Order Summary</h2>

          {cart.map((item, i) => (
            <div key={i} style={{ margin: "10px" }}>
              <p>
                {item.name} - ₹{item.price} × {item.qty}
              </p>
            </div>
          ))}

          <h2>एकूण: ₹{totalPrice}</h2>

          <button
            onClick={() => alert("🎉 Order Placed Successfully!")}
          >
            Order Confirm करा
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;