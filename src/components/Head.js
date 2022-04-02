import React from 'react'
import banner from '../img/ban.png'

function Head() {
    return (
        <div>


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
  </div>
    
        </div>
    )
}

export default Head
