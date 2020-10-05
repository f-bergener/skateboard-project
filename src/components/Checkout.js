import React, { useState } from "react";
import "./checkout.css";
import CheckoutMessage from "./CheckoutMessage";
import { removeFromCart } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const [lastName, setLastName] = useState("");
  const updateLastName = (event) => {
    setLastName(event.target.value);
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const updatePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const [email, setEmail] = useState("");
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const [address, setAddress] = useState("");
  const updateAddress = (event) => {
    setAddress(event.target.value);
  };
  const [zipCode, setZipCode] = useState("");
  const updateZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const [cardNumber, setCardNumber] = useState("");
  const updateCardNumber = (event) => {
    setCardNumber(event.target.value);
  };

  const [expirationMonth, setExpirationMonth] = useState("");
  const updateExpirationMonth = (event) => {
    setExpirationMonth(event.target.value);
  };

  const [expirationYear, setExpirationYear] = useState("");
  const updateExpirationYear = (event) => {
    setExpirationYear(event.target.value);
  };

  const [securityCode, setSecurityCode] = useState("");
  const updateSecurityCode = (event) => {
    setSecurityCode(event.target.value);
  };

  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const finalizeCheckout = (event) => {
    event.preventDefault();
    setCheckoutComplete(true);
    dispatch(removeFromCart(0));
    dispatch(removeFromCart(1));
    dispatch(removeFromCart(2));
    dispatch(removeFromCart(3));
    dispatch(removeFromCart(4));
    dispatch(removeFromCart(5));
  };

  return (
    <>
      {checkoutComplete ? (
        <CheckoutMessage />
      ) : (
        <div id="checkout-container">
          <h1 id="checkout-header">Checkout</h1>
          <form id="checkout-form" onSubmit={finalizeCheckout}>
            <label className="checkout-input-label">
              First Name:{" "}
              <input
                className="checkout-input"
                type="text"
                value={firstName}
                onChange={updateFirstName}
                required
              />
            </label>
            <label className="checkout-input-label">
              Last Name:{" "}
              <input
                className="checkout-input"
                type="text"
                value={lastName}
                onChange={updateLastName}
                required
              />
            </label>
            <label className="checkout-input-label">
              Telephone Number:{" "}
              <input
                className="checkout-input"
                type="tel"
                value={phoneNumber}
                onChange={updatePhoneNumber}
                required
              />
            </label>
            <label className="checkout-input-label">
              Email:{" "}
              <input
                className="checkout-input"
                type="email"
                value={email}
                onChange={updateEmail}
                required
              />
            </label>
            <label className="checkout-input-label">
              Address Line 1:{" "}
              <input
                className="checkout-input"
                type="text"
                value={address}
                onChange={updateAddress}
                required
              />
            </label>
            <label className="checkout-input-label">
              Zip Code:{" "}
              <input
                id="zip-code-input"
                className="checkout-input"
                type="number"
                maxLength="5"
                value={zipCode}
                onChange={updateZipCode}
                required
              />
            </label>
            <label className="checkout-input-label">
              <select className="checkout-input" required>
                <option value="" disabled selected>
                  Select a payment method
                </option>
                <option value="Credit">Credit Card</option>
                <option value="Debit">Debit Card</option>
              </select>
            </label>
            <label className="checkout-input-label">
              Card Number:{" "}
              <input
                id="card-number-input"
                className="checkout-input"
                type="number"
                maxLength="16"
                value={cardNumber}
                onChange={updateCardNumber}
                required
              />
            </label>
            <label className="checkout-input-label">
              Expiration Date:{" "}
              <select
                className="checkout-input"
                value={expirationMonth}
                onChange={updateExpirationMonth}
                required
              >
                <option value="" disabled selected>
                  Month
                </option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select
                value={expirationYear}
                onChange={updateExpirationYear}
                required
              >
                <option value="" disabled selected>
                  Year
                </option>
                <option value="20">2020</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
              </select>
            </label>
            <label className="checkout-input-label">
              Security Code:{" "}
              <input
                id="security-code-input"
                className="checkout-input"
                type="number"
                maxLength="4"
                value={securityCode}
                onChange={updateSecurityCode}
                required
              />
            </label>
            <button id="finalize-order" type="submit">
              Finalize Order{" "}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
