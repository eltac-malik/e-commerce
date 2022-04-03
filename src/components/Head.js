import React from 'react'
import banner from '../img/woman/maxresdefault.jpg'

function Head() {
    return (
        <div>

{/* 
<div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
      <div className="item active">
        <img src="https://i.imgur.com/ilv5BT8.jpg" alt="" />
      </div>

      <div className="item">
        <img src="https://wallpapercave.com/wp/wp1932768.png" className='car-img' alt="Chicago"/>
      </div>
    
      <div className="item">
        <img src="https://c4.wallpaperflare.com/wallpaper/783/785/107/ragnar-lodbrok-the-vikings-travis-fimmel-wallpaper-preview.jpg" className='car-img' alt="New york" />
      </div>
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div> */}
    
    <div id="carouselExampleIndicators" className="carousel slide" data-interval="2000" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={banner} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://i.ytimg.com/vi/QcuPWvp78DQ/maxresdefault.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.marketingturkiye.com.tr/wp-content/uploads/2020/02/redbull.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


        </div>
    )
}

export default Head
