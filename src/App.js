import './App.css';
import Nav from './components/Navbar'
import Head from './components/Head';
import Product from './components/Product';
import Men from './components/Men';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter as Router,Routes,Route,Link,Navigate
} from "react-router-dom";
import { Prov, ProvLog } from './context/Context';
import LogIn from './components/LogIn';
import Profile from './components/Profile/Profile';
import History from './components/History/History';

function App() {
  return (
    <div className="App">

   <Prov>
    <Router>
      <Nav/>
        <Routes>  
        <Route path="/" element={<Navigate replace to="/login" />} /> 
        <Route path='/login' element = {<LogIn/>}></Route>
        <Route path="/home" element={<Head/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/history" element={<History/>}/>
        </Routes>
       <Footer/>
      </Router>
    </Prov>

    </div>
  );
}

export default App;
