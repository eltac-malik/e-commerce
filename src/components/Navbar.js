import { useState, useEffect } from "react";
import logo from "../img/logo.png";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Navbar() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("../api/products.json")
      .then((resp) => setInfo(resp.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(info);

  return (
    <div>
      <div className="head-section">
              
        <header className="container">
          <nav className="navbar navbar-expand-lg navbar-light penguin-nabbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="" className="penguin-logo img-fluid" />
              </a>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/head">Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/product">Product</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/men">Men</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact-us">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
