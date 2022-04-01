import { useContext,useState, useEffect } from "react";
import logo from "../img/logo.png";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  Context from "../context/Context";

function Navbar() {
  const [info, setInfo] = useState([]);

  const profile = useContext(Context);


  useEffect(() => {
    axios
      .get("../api/products.json")
      .then((resp) => setInfo(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <header>
          <div className="nav-cont">
            <Link className="nav-icon" to="/home">
              <i className="fa-solid fa-shop fa-2x"></i>
            </Link>

            <div id="navbarNav">
              <ul className="navbar-ul">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/men">
                    Men
                  </Link>
                </li>
                <li className="nav-item">
                <i class="fa-solid fa-box-open nav-item"><sup>1</sup></i>
                </li>
                <li className="nav-item">
                <Link to="/profile" className="nav-link">
                <img src={profile.currentuser.avatar} width="40" height="40" className="rounded-circle"/>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/login" className="nav-link">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
