import React from 'react'
import { Link } from 'react-router-dom'

const ServiceHeader = () => {
  return (
    <>
       <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Services</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Services</li>
          </ol>
        </div>

      </div>
    </section>
        </>
  )
}

export default ServiceHeader