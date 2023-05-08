import React from 'react'
import { Link } from 'react-router-dom'

const ServiceFeature = () => {
  return (
    <>
     <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Features</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" style={{color: '#ffbb2c'}}></i>
              <h3><Link to="/">Lorem Ipsum</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
              <h3><Link to="/">Dolor Sitema</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line" style={{color: '#e80368'}}></i>
              <h3><Link to="/">Sed perspiciatis</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line" style={{color: '#e361ff'}}></i>
              <h3><Link to="/">Magni Dolores</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-database-2-line" style={{color: '#47aeff'}}></i>
              <h3><Link to="/">Nemo Enim</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-gradienter-line" style={{color: '#ffa76e'}}></i>
              <h3><Link to="/">Eiusmod Tempor</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-file-list-3-line" style={{color: '#11dbcf'}}></i>
              <h3><Link to="/">Midela Teren</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-file-list-3-line" style={{color: '#11dbcf'}}></i>
              <h3><Link to="/">Rajesh Sukla</Link></h3>
            </div>
          </div>
        </div>

      </div>
    </section>
        </>
  )
}

export default ServiceFeature