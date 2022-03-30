import './App.css';
import Nav from './components/Navbar'
import Head from './components/Head';
import Product from './components/Product';
import Men from './components/Men';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route,Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>

      <Router>
        <Routes>
        <Route path="/head" element={Head} />
        <Route path="/product" elements={Product}/>
        <Route path="/men" element={Men}/>
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
