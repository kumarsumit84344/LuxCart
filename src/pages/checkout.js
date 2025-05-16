import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShippingInfo,
  setBillingInfo,
  setPaymentInfo,
  setOrderSummary,
  resetCheckout,
} from "../features/checkoutSlicer";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const checkout = useSelector((state) => state.checkout);

  const [shipping, setShipping] = useState(checkout.shippingInfo);
  const [billing, setBilling] = useState(checkout.billingInfo);
  const [payment, setPayment] = useState(checkout.paymentInfo);
  const [sameAsShipping, setSameAsShipping] = useState(checkout.billingInfo.sameAsShipping || true);

  // Calculate order summary based on cart items
  useEffect(() => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingCharge = subtotal > 1000 ? 0 : 50; // example shipping logic
    const total = subtotal + shippingCharge;

    dispatch(
      setOrderSummary({
        items: cartItems,
        subtotal,
        shippingCharge,
        total,
      })
    );
  }, [cartItems, dispatch]);

  // Update billing info if same as shipping
  useEffect(() => {
    if (sameAsShipping) {
      setBilling({ ...shipping, sameAsShipping: true });
    } else {
      setBilling((prev) => ({ ...prev, sameAsShipping: false }));
    }
  }, [sameAsShipping, shipping]);

  // Handlers for input changes
  const handleShippingChange = (e) => setShipping({ ...shipping, [e.target.name]: e.target.value });
  const handleBillingChange = (e) => setBilling({ ...billing, [e.target.name]: e.target.value });
  const handlePaymentChange = (e) => setPayment({ ...payment, [e.target.name]: e.target.value });

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setShippingInfo(shipping));
    dispatch(setBillingInfo(billing));
    dispatch(setPaymentInfo(payment));

    // TODO: Add payment processing logic here

    alert("Order placed successfully!");
    dispatch(resetCheckout());
    navigate("/");
  };

  return (
    <div className="bg-[#F7FAFC] min-h-screen p-6 pt-24 max-w-4xl mx-auto text-[#2D3748]">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Shipping Information */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-[#1E1E2F]">Shipping Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["name", "address", "city", "state", "zip", "phone"].map((field) => (
              <input
                key={field}
                type={field === "phone" ? "tel" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
                value={shipping[field] || ""}
                onChange={handleShippingChange}
                required
                className="p-2 border border-[#A0AEC0] rounded"
              />
            ))}
          </div>
        </section>

        {/* Billing Information */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-[#1E1E2F]">Billing Information</h2>
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={sameAsShipping}
              onChange={() => setSameAsShipping(!sameAsShipping)}
              className="mr-2"
            />
            Same as Shipping Address
          </label>
          {!sameAsShipping && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["name", "address", "city", "state", "zip", "phone"].map((field) => (
                <input
                  key={field}
                  type={field === "phone" ? "tel" : "text"}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
                  value={billing[field] || ""}
                  onChange={handleBillingChange}
                  required={!sameAsShipping}
                  className="p-2 border border-[#A0AEC0] rounded"
                />
              ))}
            </div>
          )}
        </section>

        {/* Payment Information */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-[#1E1E2F]">Payment Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={payment.cardNumber || ""}
              onChange={handlePaymentChange}
              required
              maxLength={16}
              className="p-2 border border-[#A0AEC0] rounded"
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={payment.expiry || ""}
              onChange={handlePaymentChange}
              required
              maxLength={5}
              className="p-2 border border-[#A0AEC0] rounded"
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={payment.cvv || ""}
              onChange={handlePaymentChange}
              required
              maxLength={3}
              className="p-2 border border-[#A0AEC0] rounded"
            />
          </div>
        </section>

        {/* Order Summary */}
        <section className="bg-white p-4 rounded shadow max-w-md mx-auto text-[#1E1E2F]">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="mb-4 max-h-48 overflow-y-auto">
            {checkout.orderSummary.items.map((item) => (
              <li key={item.id} className="flex justify-between border-b border-gray-200 py-2">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{Math.round(item.price * item.quantity * 83).toLocaleString('en-IN')}</span>
                
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>
            <span>₹{Math.round(checkout.orderSummary.subtotal * 83).toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Shipping</span>
            
            <span className="text-green-600 font-bold">Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
           
            <span> ₹{Math.round(checkout.orderSummary.subtotal * 83).toLocaleString('en-IN')}</span>
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-[#F4B400] hover:bg-yellow-500 text-[#1E1E2F] font-bold py-3 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
