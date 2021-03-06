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



  return (
    <div>
      {isModal && <Modal data={aboutdata} closeModal={()=>{setisModal(false)}} />}

        <div className="filter">
          <div className="input">
            <input type="text" placeholder="Search Product" onChange={item => setSearch(item.target.value)}/>
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
            }).map((item)=>
            {
                return(
                    <div key={item.id} className="col mb-4">
                    <div className="card c"
                     data-toggle="modal" data-target="#myModal"
                     onClick={()=> {setAboutdata({id:item.id,price:item.price,title:item.title,image:item.image,alt:item.alt,category:item.category})
                     setisModal(true)
                  }} >
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body c-body">
                        <h4 className="card-title c-title">{item.title}</h4>
                        <h5 className="card-text c-text">
                            {item.price} AZN
                            <button onClick={(e)=>
                            {
                              product.countPlusbtn(item)
                              e.stopPropagation();
                            }} className="btn btn-danger">Add</button>
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
