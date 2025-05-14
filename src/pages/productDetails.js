import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../services/api";
import {addToCart} from "../features/cartslicer"
import {removeFromCart } from "../features/cartslicer";



function ProductDetails() {
  const dispatch = useDispatch();
  const { product = [], error, loading } = useSelector((state) => state.product);
  const { name } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const cartItems = useSelector((state) => state.cart.cartItems); // select from cart

  const getQuantity = (id) => {
    if (!cartItems || !Array.isArray(cartItems)) return 0;
    const item = cartItems.find((item) => item.id === id);
    return item?.quantity || 0;
  };


  return (
    <div className="bg-[#F7FAFC] text-[#2D3748] min-h-screen p-4">
     {(loading || error) && (
  <div className="flex items-center justify-center h-[80vh]">
    {loading && <p className="text-xl font-semibold text-gray-700">Loading...</p>}
    {error && <p className="text-xl font-semibold text-red-600">Error: {error}</p>}
  </div>
)}

      <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pt-24">
        {product.length > 0 ? (
          product.map((p) => (
            <li key={p.id} className="bg-white shadow-md p-4 rounded-lg border border-gray-200 flex flex-col justify-between h-full">
              <img src={p.images[0]} alt={p.title} className="w-full h-40 sm:h-30 md:h-30 object-cover rounded-md mb-2" />
              <h2 className="text-sm sm:text-base md:text-lg font-semibold">{p.title}</h2>
              {/* {p.description.length > 100 ? p.description.slice(0, 100) + "..." : p.description} */}
              <p className="text-accent font-bold mt-2">
  ₹{Math.round(p.price * 83).toLocaleString('en-IN')}
</p>
{getQuantity(p.id) === 0 ? (
  <button
  className="bg-[#F4B400] text-white text-sm py-1 px-4 rounded mt-2 hover:bg-yellow-600 w-full"
    onClick={() => handleAddToCart(p)}
  >
    Add to Cart
  </button>
) : (
  <div className="flex items-center justify-between mt-2 border rounded px-2 py-1 w-full">
    <button
      className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
      onClick={() => dispatch(removeFromCart(p))}
    >
      -
    </button>
    <span className="text-lg font-semibold">{getQuantity(p.id)}</span>
    <button
      className="bg-[#F4B400] text-white px-3 py-1 rounded hover:bg-yellow-600"
      onClick={() => handleAddToCart(p)}
    >
      +
    </button>
  </div>
)}

            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>

      {/* 🔒 Constant Cart Button at Bottom Right */}
      <button
        className="fixed bottom-4 right-4 bg-[#F4B400] text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600"
        onClick={() => alert("Redirect to Cart or Open Cart View")}
      >
        🛒 View Cart
      </button>
    </div>
  );
}

export default ProductDetails;
