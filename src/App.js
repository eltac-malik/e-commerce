import './App.css';
import Nav from './components/Navbar'
import Head from './components/Head';
import Product from './components/Product';
import Men from './components/Men';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter as Router,Routes,Route,Link,useNavigate
} from "react-router-dom";
import { Prov } from './context/Context';

function App() {
  return (
    <div className="App">


    <Prov>
    <Router>
      <Nav/>
        <Routes>
        <Route path="/head" element={<Head/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/men" element={<Men/>}/>
        
        </Routes>
      </Router>

      <Footer/>

    </Prov>

    </div>
  );
}

export default App;
