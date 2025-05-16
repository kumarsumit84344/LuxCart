import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartslicer";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-[#F7FAFC] min-h-screen p-6 text-[#2D3748] pt-28">
      <h1 className="text-3xl font-bold mb-6 text-[#1E1E2F]">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-[#A0AEC0]">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-center gap-4 w-full">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-[#A0AEC0] mt-1">
                    ₹{Math.round(item.price * 83).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleRemove(item)}
                  className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="text-lg font-bold">{item.quantity}</span>
                <button
                  onClick={() => handleAdd(item)}
                  className="px-3 py-1 bg-[#F4B400] text-white rounded hover:bg-yellow-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-2">Order Summary</h2>
          <p className="text-[#2D3748] mb-4">
            Total Items: <strong>{cartItems.length}</strong>
          </p>
          <p className="text-[#2D3748] text-lg">
            Total Price:{" "}
            <span className="font-bold text-[#F4B400]">
              ₹{Math.round(getTotalPrice() * 83).toLocaleString("en-IN")}
            </span>
          </p>
          <button className="mt-4 w-full bg-[#1E1E2F] text-white py-2 rounded-lg hover:bg-[#2b2b44]">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
