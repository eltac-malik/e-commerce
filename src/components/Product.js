import { useContext , useState} from "react";
import {BrowserRouter as Router,Routes,Route,Link,useNavigate
} from "react-router-dom";
import  Context from "../context/Context";
import Modal from "./Modal";

function Product() {

  const product = useContext(Context);
  
  const [aboutdata,setAboutdata] = useState({});
  const [isModal,setisModal] = useState(false);
  
  const [search,setSearch] = useState("");



  
  const forbtn = (e) =>
  {
    product.setCountProduct((product.countProduct)+1)
    e.stopPropagation()
  }


  return (
    <div>
      {isModal && <Modal data={aboutdata} closeModal={()=>{setisModal(false)}} />}

        <div className="filter">
          <div className="input">
            <input type="text" placeholder="Search Product" onChange={e => setSearch(e.target.value)}/>
            </div>
        </div>
      <section id="products" className="container mt-5">
        <h1>Products</h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            
            {product.data.filter(val =>
            {
              if (search === "")
              {
                return val  
              }
              else if (val.title.toLowerCase().includes(search.toLocaleLowerCase()))
              {
                  return val;
              }
            }).map((e)=>
            {
                return(
                    <div key={e.id} className="col mb-4">
                    <div className="card c"
                     data-toggle="modal" data-target="#myModal"
                     onClick={()=> {setAboutdata({id:e.id,price:e.price,title:e.title,image:e.image,alt:e.alt,category:e.category})
                     setisModal(true)
                  }} >
                      <img
                        src={e.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body c-body">
                        <h4 className="card-title c-title">{e.title}</h4>
                        <h5 className="card-text c-text">
                            {e.price} AZN
                            <button onClick={forbtn} className="btn btn-danger">Add</button>
                        </h5>
                      </div>
                    </div>
                  </div>
                )
            })}
            


          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
