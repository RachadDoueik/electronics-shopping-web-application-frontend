import { FaShoppingCart, FaTimes, FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";

const CartDropdown = () => {
  const [showCart, setShowCart] = useState(true);

  const toggleCart = () => {
    setShowCart(!showCart); // Toggle the showCart state
  };

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 980.00, quantity: 1 },
    { id: 2, name: "Product 2", price: 980.00, quantity: 3 },
  ]);

  return (
    <div className={showCart ? "dropdown" : "dropdown open"}>
      <a
        href="#"
        className="dropdown-toggle"
        onClick={toggleCart}
        aria-expanded={showCart}  // Dynamic aria-expanded value
      >
        <FaShoppingCart />
        <br></br>
        <span>Your Cart</span>
        <div className="qty">3</div>
      </a>

      {/* Conditionally render the cart dropdown */}
        <div className="cart-dropdown">
          <div className="cart-list">
           {cartItems.map((item) => (
              <div className="product-widget" key={item.id}>
                <div className="product-img">
                  <img src="https://via.placeholder.com/150" alt="" />
                </div>
                <div className="product-body">
                  <h3 className="product-name"><a href="#">{item.name}</a></h3>
                  <h4 className="product-price">${item.price} x {item.quantity}</h4>
                </div>
                <button className="delete"><FaTimes /></button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <small>3 Item(s) selected</small>
            <h5>SUBTOTAL: $2940.00</h5>
          </div>
          <div className="cart-btns">
            <a href="#">View Cart</a>
            <a href="#">Checkout  <FaArrowCircleRight /></a>
          </div>
        </div>
    </div>
  );
};

export default CartDropdown;
