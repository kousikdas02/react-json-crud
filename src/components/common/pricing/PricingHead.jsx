import React from 'react'
import { Link } from 'react-router-dom'

const PricingHead = () => {
    return (
        <div>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Pricing</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Pricing</li>
                        </ol>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default PricingHead