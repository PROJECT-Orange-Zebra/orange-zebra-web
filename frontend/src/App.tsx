import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  
  return (
    
    <Router>
      <div className="App">
        <div className="grid-container">
          <header className= "header"> 

<link rel = "stylesheet" href= "style.css" />
<title> Orange Zebra</title>

<div className= "header-links">
	<Link to="/">Home</Link>
	<Link to="/catalog">Catalog</Link>
</div>
</header>
  </div>
      {/* <header className="App-header"> </header> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      <main className="main">
	      <Routes>
      	<Route path="/" element={<Home />} />
      	<Route path="/catalog" element={<Products />} />
	      </Routes>
    	</main>
    </div>
    </Router>
  );

}

export default App;
