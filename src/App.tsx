import React from 'react';
import logo from './logo.svg';
import './App.css';
import Orders from './Orders/Orders'
import OrderDetail from './Orders/OrderDetail';

function App() {
  const openMenu = () => {
      document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <div className="grid-container">
        <header className= "header">
            <div className= "brand">
              <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">Orange Zebra</a>
            </div>
            <div className= "header-links">
                <a href="cart.html">Cart</a> 
                <a href="signin.html">Sign In</a>
                <Link to="/orders">Orders</Link> 
            </div>
        </header>
        <head>
          <link rel="stylesheet" href="style.css" />
          <title>Orange Zebra</title>
          </head>

          <div> 
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="side-close-button" onClick={openMenu}>
        x
        </button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>
      </ul>
    </aside>

    <main>
        <main className = "main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="orders" element={<Orders />}></Route>
            <Route path="/order/:id" element={<OrderDetail />}></Route> 
          </Routes>
        </main>
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="images/d1.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">60</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d1.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">60</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d1.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">60</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d1.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">60</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d1.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">60</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d1.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">60</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
    </div>
    <footer>
      &copy; 2023 Orange Zebra
    </footer>
  </div>
  );

}

export default App;
