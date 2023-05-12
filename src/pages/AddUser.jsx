import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddUser = () => {
    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        city: "",
        state: "",
        pin: "",
        dob: ""
    }
    const navigate = useNavigate()
    const [eachUserData, setEachUserData] = useState(initialValues)
    const [error, setError] = useState({})

    const validation = () => {
        let error = {}

        if(!eachUserData.name){
            error.name = "Name is required."
        }

        if(!eachUserData.username){
            error.username = "Username is required"
        }

        if (!eachUserData.email) {
            error.email = "Email is required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(eachUserData.email)
        ) {
            error.email = "Enter a valid Email"
        }

        if(!eachUserData.password){
            error.password = "Password is required"
        }

        if(!eachUserData.city){
            error.city = "City is required"
        }

        if(!eachUserData.state){
            error.state = "State is required"
        }

        if(!eachUserData.dob){
            error.dob = "Date of birth is required"
        }

        if(!eachUserData.pin){
            error.pin = "Pin of birth is required"
        }

        return error
    }

    let name, value
    const postUserData = e =>{
        name = e.target.name;
        value = e.target.value;

        setEachUserData({...eachUserData, [name]:value})

        if(name === 'name'){
            if(value.length === 0){
                setError({...error, name: value})
                setEachUserData({...eachUserData, name: ""})
            } else{
                setError({...error, name: ""})
                setEachUserData({...eachUserData, name: value})
            }
        }

        if(name === 'username'){
            if(value.length === 0){
                setError({...error, name: value})
                if(value.length === 0){
                    setEachUserData({...eachUserData, username: ''})
                } else{
                    setError({...error, name: ""})
                    setEachUserData({...eachUserData, username: value})
                }
            }
        }

        if(name === 'email'){
            if(value.length === 0){
                setError({...error, name: value})
                setEachUserData({...eachUserData, email: ''})
            } else{
                setError({...error, name: ""})
                setEachUserData({...eachUserData, email: value})
            }
        }

        if(name === 'password'){
            if(value.length === 0){
                setError({...error, name: value})
                setEachUserData({...eachUserData, password: ''})
            } else{
                setError({...error, name: ""})
                setEachUserData({...eachUserData, password: value})
            }
        }

        if(name === 'city'){
            if(value.length === 0){
                setError({...error, name: value})
                setEachUserData({...eachUserData, city: ''})
            } else{
                setError({...error, name: ""})
                setEachUserData({...eachUserData, city: value})
            }
        }
        
        if(name === 'state'){
            if(value.length === 0){
                setError({...error, name: value})
                setEachUserData({...eachUserData, state: ''})
            } else{
                setError({...error, name: ""})
                setEachUserData({...eachUserData, state: value})
            }
        }

        if(name === 'dob'){
            if(value.length === 0){
                setError({...error, name: value})
                setEachUserData({...eachUserData, dob: ''})
            } else{
                setError({...error, name: ""})
                setEachUserData({...eachUserData, dob: value})
            }
        }

        if(name === 'pin'){
            if(value.length === 0){
                setError({...error, name: value})
                setEachUserData({...eachUserData, pin: ''})
            } else{
                setError({...error, name: ""})
                setEachUserData({...eachUserData, pin: value})
            }
        }
    }


    const SubmitInfo = async (e) => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())



        // if (Object.keys(ErrorList).length === 0) {
        //     await addUser(eachUserData)
        //     navigate('/')
            
        // }


    }

    console.log(error);
    return (
        <>
            <div className="addUser cmn_gap">
                <div className="container">
                    <div className="addUser_form">
                        <form action="" onSubmit={SubmitInfo}>
                            <div className="form_row row">
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Name</label>
                                    <input type="text" className="form-control" name='name' placeholder='Enter Name' onChange={e => postUserData(e)}/>
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">User Name</label>
                                    <input type="text" className="form-control" name='username' placeholder='Enter User Name' onChange={e => postUserData(e)}/>
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Email</label>
                                    <input type="text" className="form-control" name='email' placeholder='Enter Email' onChange={e => postUserData(e)}/>
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control" name='password' placeholder='Enter Password' onChange={e => postUserData(e)}/>
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">City</label>
                                    <input type="text" className="form-control" name='city' placeholder='Enter City' onChange={e => postUserData(e)}/>
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">State</label>
                                    <input type="text" className="form-control" name='state' placeholder='Enter State' onChange={e => postUserData(e)}/>
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Pin Code</label>
                                    <input type="number" className="form-control" name='pin' placeholder='Enter Pin Code' onChange={e => postUserData(e)}/>
                                </div>
                                <div className="col-lg-6 form_col">
                                    <label htmlFor="">Date of Birth</label>
                                    <input type="date" className="form-control" name='dob' placeholder='Enter Date of Birth' onChange={e => postUserData(e)}/>
                                </div>
                            </div>
                            <button type="submit" className='btn btn-success'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser