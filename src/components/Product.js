import { useContext , useState} from "react";
import {BrowserRouter as Router,Routes,Route,Link,useNavigate
} from "react-router-dom";
import  Context from "../context/Context";
import Modal from "./Modal";
import ModalAbout from "./Modal";

function Product() {

  const product = useContext(Context);

  const [aboutdata,setAboutdata] = useState({});
  const [isModal,setisModal] = useState(false);


  const handleCard = (e)=>
  {
    console.log(e.target.name)
  }


  return (
    <div>
      {isModal && <Modal data={aboutdata} closeModal={()=>{setisModal(false)}} />}
      <section id="products" className="container mt-5">
        <h1>Products</h1>
        
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            
            {product.map((e)=>
            {
                return(
                    <div key={e.id} className="col mb-4">
                    <div className="card c"
                     data-toggle="modal" data-target="#exampleModal"
                     onClick={()=> {setAboutdata({id:e.id,price:e.price,title:e.title})
                     setisModal(true)
                  }} >
                      <img
                        src={e.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body c-body">
                        <h5 className="card-title c-title">{e.title}</h5>
                        <p className="card-text c-text">
                            {e.price} AZN
                            <button className="btn btn-danger">Add</button>
                        </p>
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
