import {createContext,useState,useEffect} from 'react'
import axios from 'axios';

const Context = createContext();

export const Prov = ({children}) =>
{   
  const [data, setData] = useState([]); 
  useEffect(() => {
      axios
      .get("./api/products.json")
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
    }, []);


    // users

    
    const [users, setUsers] = useState("");

    const [currentuser,setCurrentuser] = useState([]);

    const [cartItems,setCartItems] = useState([]);



    // const [orders,setOrders] = useState([]);
    // const orderHistory = () =>
    // {
    //   setOrders([...orders,cartItems])
    //   setCartItems([]);
    // }

    const [countProduct,setCountProduct] = useState(0);

    const countbtn = (item) =>
    {
      setCountProduct(countProduct+1)
      setCartItems([...cartItems,item])
    }
 
    useEffect(()=>{
      axios
      .get("./api/users.json")
      .then((resp) => setUsers(resp.data))
      .catch((err) => console.log(err));
      
    },[])
    
    
    const values = {data,users,setCurrentuser,currentuser,countbtn,countProduct,cartItems}
    

  return <Context.Provider value={values}>{children}</Context.Provider>

}




export default Context;