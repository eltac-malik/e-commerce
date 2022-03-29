import './App.css';
import Nav from './components/Navbar'
import Head from './components/Head';
import Product from './components/Product';
import Men from './components/Men';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Head/>
      <Product/>
      <Men/>
      <Footer/>
    </div>
  );
}

export default App;
