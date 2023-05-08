import React from 'react'
import { Link } from 'react-router-dom'

const ContactHead = () => {
    return (
        <div>
            <section id="breadcrumbs" class="breadcrumbs">
                <div class="container">

                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Contact</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Contact</li>
                        </ol>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ContactHead