import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../services/api";
import {addToCart} from "../features/cartslicer"

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

  return (
    <div className="bg-[#F7FAFC] text-[#2D3748] min-h-screen p-4">
     {(loading || error) && (
  <div className="flex items-center justify-center h-[80vh]">
    {loading && <p className="text-xl font-semibold text-gray-700">Loading...</p>}
    {error && <p className="text-xl font-semibold text-red-600">Error: {error}</p>}
  </div>
)}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 pt-24">
        {product.length > 0 ? (
          product.map((p) => (
            <li key={p.id} className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
              <img src={p.images[0]} alt={p.title} className="w-full h-60 object-cover rounded-md mb-2" />
              <h2 className="text-lg font-semibold">{p.title}</h2>
              {/* {p.description.length > 100 ? p.description.slice(0, 100) + "..." : p.description} */}
              <p className="text-accent font-bold mt-2">
  ₹{Math.round(p.price * 83).toLocaleString('en-IN')}
</p>
              <button
                className="bg-[#F4B400] text-white py-1 px-4 rounded mt-2 hover:bg-yellow-600"
                onClick={() => handleAddToCart(p)}
              >
                Add to Cart
              </button>
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
