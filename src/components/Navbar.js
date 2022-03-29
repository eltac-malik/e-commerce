import {useState,useEffect} from 'react'
import logo from '../img/logo.png'
import axios from 'axios'

function Navbar() {

    const [info,setInfo] = useState([]);

    useEffect(()=>
    {
        axios.get('../api/products.json')
        .then(resp => setInfo(resp.data))
        .catch(err => console.log(err))
    },[])

    console.log(info)

    return (
        <div>

            <div className="head-section">
                <header className="container">
                    <nav className="navbar navbar-expand-lg navbar-light penguin-nabbar">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="" className="penguin-logo img-fluid"/>
          </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active " aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#products">Products</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#about-us">About us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact-us">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
        </div>
      </nav>
    </header>
  </div>
        </div>
            )
        }
        
        export default Navbar
