import './App.css';
import Nav from './components/Navbar'
import Head from './components/Head';
import Product from './components/Product';
import Men from './components/Men';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Head/>
      <Product/>
      <Men/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
