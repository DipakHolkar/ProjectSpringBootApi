import React, { Component } from 'react'


function HomePage () {

    
    return (
      <div>

       
        <div className='divider py-1 bg-dark'></div>
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="100">
              <img src={require('../../images/image3.jpg')} height="600" width="100%" />
            </div>
            <div className="carousel-item" data-interval="200">
              <img src={require('../../images/cur2.jpg')} height="500" width="100%" />
            </div>
            <div className="carousel-item">
              <img src={require('../../images/cur3.jpg')} height="500" width="100%" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <h1 className="text-center font-weight-bold bg-warning text-white py-3"> About E-Course-Network </h1>


      
        <div className='card-group' style={{ padding: "20px" }}>
          <div className="card border-0" style={{ width: "18rem", padding: "20px", }}>
            <img src={require('../../images/icon3.png')} className="card-img-top" alt="..." height={300} width={150} />
            <div className="card-body">
              <h3 className='text-center'>Trust</h3>
              <p className="card-text">Our goal is to create the  most trusted platform, 
                    and your trust is at the center of everything we do. 
                    Our Service, policies, processes and systems are designed to serve you,better courses and 
                    your data; creating a safe place for you to learn  anything and provide quality education anywhere.</p>
            </div>
          </div>
          <div className="card border-0" style={{ width: "18rem", padding: "20px" }}>
             <img src={require('../../images/icon4.jfif')} className="card-img-top" alt="..." height={300} width={150}/>
            <div className="card-body">
              <h3 className='text-center'>Education</h3>
              <p className="card-text">Education is the most transformative tool in the world that shapes not only an individual but also a society.
our platform provide good education system and clearly identifies the student's needs. helps students  succeeful in their career and future.</p>
            </div>
          </div>
          <div className="card border-0" style={{ width: "18rem", padding: "20px" }}>
            <img src={require('../../images/icon1.png')} className="card-img-top" alt="..." height={300} width={150} />
            <div className="card-body">
              <h3 className='text-center'>Quality</h3>
              <p className="card-text">Over the years, the cost of education has increased many folds to make it beyond the reach of many. We at our platform strive to make quality education affordable to the masses.</p>
            </div>
          </div>
          <div className="card border-0" style={{ width: "18rem", padding: "20px" }}>
            <img src={require('../../images/icon2.jfif')} className="card-img-top" alt="..." height={300} width={150} />
            <div className="card-body">
              <h3 className='text-center'>Skill up</h3>
              <p className="card-text">we focus on creating enriching, engaging learning journeys that helps our learners build their career in desired technology skills in easy, fun & meaningful way.</p>
            </div>
          </div>
        </div>

        <div className="divider py-2 bg-primary"></div>

      </div>
    )
  
    }

export default HomePage;