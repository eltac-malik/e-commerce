import React from 'react'
import homeicon from '../img/homeicon.png'
import delicon from '../img/delicon.png'
import contacticon from '../img/contacticon.png'
import storeicon from '../img/storeicon.png'

function Info() {
    return (
        <div>
            
            <section className="container mt-5 pt-5">
      <div className="pt-2 pb-5 container">
        <div className="row d-flex align-items-center flex-column-reverse flex-lg-row">
          <div className="col-md-6 px-3">
            <div className="card mb-3 penguin-card-border shadow">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={homeicon}  className="w-50 penguin-info" alt="..."/>
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">Find the Perfect Fit</h5>
                    <p className="card-text">Everybody is different, which is why we offer styles for every body.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 penguin-card-border shadow">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={delicon} className="w-50 penguin-info" alt="..."/>
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">Free Exchanges</h5>
                    <p className="card-text">One of the many reasons you can shop with peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 penguin-card-border shadow">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={contacticon} className="w-50 penguin-info" alt="..."/>
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">Contact Our Seller</h5>
                    <p className="card-text">They are here to help you. That's quite literally what we pay them for.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 how-img px-5">
              <img src={storeicon} className="img-fluid" alt=""/>
          </div>
      </div>
    </div>
    </section>

        </div>
    )
}

export default Info
