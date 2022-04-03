import {useContext,useEffect} from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Navbar'
import  Context from "../context/Context";
import {useNavigate} from "react-router-dom";

function Layout({children}) {
      
  const logged = useContext(Context);

  const navigate = useNavigate();

  useEffect(()=>
  {
    !logged.isLogged && navigate("/login")
  },[])


  return (
    <div>
        {logged?.isLogged && <Nav/>}
            {children}
        {logged?.isLogged && <Footer/>}
    </div>
  )
}

export default Layout