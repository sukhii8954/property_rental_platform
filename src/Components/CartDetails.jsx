import React from "react";
import { useCart } from "../Contexts/Cart";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const { cart, removeFromCart, updateCartItem } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id, q) => {
    if (q <= 0) return;
    updateCartItem(id, { q });
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  // console.log('cart Items:' , cart);

  const totalCost = cart.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0; // Convert to number, default to 0 if invalid
    const quantity = parseInt(item.q, 10) || 0; // Convert to integer, default to 0 if invalid
    return acc + price * quantity;
  }, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700 mb-2">Price: ₹{item.price}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.q - 1)}
                    className="bg-gray-200 text-gray-600 py-1 px-2 rounded hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="mx-2">{item.q}</span>

                  <button
                    onClick={() => handleQuantityChange(item.id, item.q + 1)}
                    className="bg-gray-200 text-gray-600 py-1 px-2 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Remove
                </button>
                <span className="text-lg p-1 font-bold">
                  ₹{(item.price * item.q).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">
            Total: {totalCost.toFixed(2)}
          </div>
          <button onClick={()=> navigate('/booking-details')} className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
