import { useState, useEffect } from "react";
import axios from "axios";  

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("./api/products.json")
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div>
      <section id="products" className="container mt-5">
        <h1>Products</h1>
        
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            
            {data.map((e,i)=>
            {
                return(
                    <div key={i} className="col mb-4">
                    <div className="card c">
                      <img
                        src={e.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body c-body">
                        <h5 className="card-title c-title">{e.title}</h5>
                        <p className="card-text c-text">
                            {e.alt}
                            <a href="">Add</a>
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
