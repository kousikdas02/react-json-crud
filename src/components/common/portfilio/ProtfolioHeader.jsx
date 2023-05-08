import React from 'react'
import { Link } from 'react-router-dom'

const ProtfolioHeader = () => {
  return (
    <div>
         <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Portolio</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Portolio</li>
          </ol>
        </div>

      </div>
    </section>
    </div>
  )
}

export default ProtfolioHeader