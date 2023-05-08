import React, { useState } from 'react'

const AddUser = () => {
    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        city: "",
        state: "",
        pin: "",
        dov: ""
    }
    const [eachUserData, setEachUserData] = useState()
    const [error, setError] = useState({})
    const formSubmit = () =>{
        setEachUserData()
    }
    return (
        <>
            <div className="addUser cmn_gap">
                <div className="container">
                    <div className="addUser_form">
                        <form action="">
                            <div className="form_row row">
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Name</label>
                                    <input type="text" class="form-control" name='Name' placeholder='Enter Name' />
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">User Name</label>
                                    <input type="text" class="form-control" name='username' placeholder='Enter User Name' />
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Email</label>
                                    <input type="text" class="form-control" name='email' placeholder='Enter Email' />
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Password</label>
                                    <input type="password" class="form-control" name='password' placeholder='Enter Password' />
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">City</label>
                                    <input type="text" class="form-control" name='city' placeholder='Enter City' />
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">State</label>
                                    <input type="text" class="form-control" name='state' placeholder='Enter State' />
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Pin Code</label>
                                    <input type="number" class="form-control" name='pin' placeholder='Enter Pin Code' />
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Date of Birth</label>
                                    <input type="date" class="form-control" name='dob' placeholder='Enter Date of Birth' />
                                </div>
                            </div>
                            <button type="submit" className='btn btn-success' onSubmit={formSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser