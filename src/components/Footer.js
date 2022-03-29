import React from 'react'

function Footer() {
    return (
        <div>

            <section className="footer-section">
                <div className="container pb-5">
                    <div className="row">
                        <div id="about-us" className="col-sm pe-5 pt-3">
                            <img src="Images/logo.png" alt="" className="penguin-logo img-fluid" /><hr/>
                                <p>Changing the way you dress will change the way you feel. When you are well dressed and look good you will automatically feel better. When you feel good about yourself, you are more likely to feel good inside, treat others better, and have more energy.</p>
        </div>
                            <div id="contact-us" className="col-sm pe-5 pt-3">
                                <h5>Contact us</h5><hr/>
                                    <p><i className="fa fa-map-marker fa-1x"> </i> House# 93/A Bosila, Mohammadpur, Dhaka-1207</p>
                                    <p><i className="fa fa-envelope-open"></i> support@penguin.com</p>
                                    <p><i className="fa fa-phone"></i> +0998866000</p>
        </div>
                                <div className="col-sm pe-5 pt-3">
                                    <div>
                                        <h5>Get in Touch</h5><hr/>
                                            <i className="fa-brands fa-facebook-square fa-2x pe-3"></i>
                                            <i className="fa-brands fa-twitter-square fa-2x pe-3"></i>
                                            <i className="fa-brands fa-linkedin fa-2x pe-3"></i>
          </div>
                                        <div className="pt-5">
                                            <h5>Pay with </h5><hr/>
                                                <img src="icon/pay.png" className="w-75" alt="" />
          </div>
                                        </div>
                                    </div>
                                </div>
                                <footer>
                                    <hr/>
                                        <p className="text-center">© Penguin Fashion 2021, all rights reserved</p>
    </footer>
  </section>

                            </div>
                            )
                        }
                        
                        export default Footer
