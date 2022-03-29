import React from 'react'
import banner from '../img/ban.png'

function Head() {
    return (
        <div>
            
    <section className="head-section">
      <div className="pt-2 pb-5 container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 px-3">
            <h1 id="text-style">Be the Penguins</h1>
            <h1 className="text-style2">of Winter</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button type="button" className="btn penguin-btn"><i className="fa fa-shopping-cart"></i> BUY NOW</button>
          </div>
          <div className="col-md-6 how-img px-5">
              <img src={banner} className="img-fluid" alt=""/>
          </div>
      </div>
    </div>
    </section>
    
        </div>
    )
}

export default Head
