import './App.css';
import Head from './components/Head';
import Product from './components/Product';
import Men from './components/Men';
import {BrowserRouter as Router,Routes,Route,Navigate
} from "react-router-dom";
import LogIn from './components/LogIn';
import Profile from './components/Profile/Profile';
import History from './components/History/History';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout';

function App() {


  return (
    <div className="App">
     
    <Router>
    <Layout>
        <Routes>  
        <Route path="/" element={<Navigate replace to="/login" />} /> 
        <Route path='/login' element = {<LogIn/>}></Route>
        <Route path="/home" element={<Head/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </Layout>
    </Router>
       

    </div>
  );
}

export default App;
