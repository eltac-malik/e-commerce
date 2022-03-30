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
    
    

  return <Context.Provider value={data}>{children}</Context.Provider>

}

export default Context;