import React from 'react'
import jack1 from '../img/jack1.png'
import jack2 from '../img/jack2.png'
import jack3 from '../img/jack3.png'

function Men() {
    return (
        <div>
            
            <section className="container mrgn mt-5">
      <h1 className="penguin-catagory">Man Jacket</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div className="col">
          <div className="card h-100 penguin-card-border shadow rounded">
            <img src={jack1} className="card-img-top penguin-card-img w-75" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Snowboard Jacket Mens</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, neque.</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center penguin-card-footer">
              <div>
                <h3 className="price-text-style">$234</h3>
              </div>
              <div>
                <button type="button" className="btn penguin-btn"><i className="fa fa-shopping-cart"></i> BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 penguin-card-border shadow rounded">
            <img src={jack2} className="card-img-top penguin-card-img w-75" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Man Leather Jackets</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, minus!</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center penguin-card-footer">
              <div>
                <h3 className="price-text-style">$234</h3>
              </div>
              <div>
                <button type="button" className="btn penguin-btn"><i className="fa fa-shopping-cart"></i> BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 penguin-card-border shadow rounded">
            <img src={jack3} className="card-img-top penguin-card-img w-75" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Man Casual Jackets</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi.</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center penguin-card-footer">
              <div>
                <h3 className="price-text-style">$234</h3>
              </div>
              <div>
                <button type="button" className="btn penguin-btn"><i className="fa fa-shopping-cart"></i> BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </div>
    )
}

export default Men
