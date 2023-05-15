import React, { useEffect, useState } from "react";
import "../assets/css/style.css"
import { deleteUser, getAllUsers } from "../services/API";
import { Link } from "react-router-dom";

const Home = () => {
  const [allUsers, setAllUsers] = useState([])

  const allUserData = async () =>{
    try {
      const response = await getAllUsers()
      // console.log(response)
      setAllUsers(response?.data)
    } catch (error) {
      console.log('Error while getting all user data', error);
    }
  }
  useEffect(() => {
    allUserData()
  }, [])

  const deleteUserData = async id => {
    await deleteUser(id)
    allUserData()
}
  // console.log(allUsers);
  
  return (
    <>
      <div className='userTable cmn_gap'>
        <div className="container">
          <div className='table-responsive'>
            <table className='table'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>User Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Password</th>
                  <th scope='col'>City</th>
                  <th scope='col'>State</th>
                  <th scope='col'>Pin Code</th>
                  <th scope='col'>Date of Birth</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  allUsers?.map(eachUser => {
                    return(
                      <tr key={eachUser.id}>
                        <th scope="row">{eachUser.id}</th>
                        <td>{eachUser.name}</td>
                        <td>{eachUser.username}</td>
                        <td>{eachUser.email}</td>
                        <td>{eachUser.password}</td>
                        <td>{eachUser.city}</td>
                        <td>{eachUser.state}</td>
                        <td>{eachUser.pin}</td>
                        <td>{eachUser.dob}</td>
                        <td>
                          <ul>
                            <li><Link to={`/edit-user/${eachUser.id}`}><button className="btn btn-warning">Edit</button></Link></li>
                            <li><button className="btn btn-danger" onClick={() => deleteUserData(eachUser.id)}>Delete</button></li>
                          </ul>
                        </td>
                      </tr>
                    )
                  })
                }
                
                {/* <tr>
                  <th scope='row'>1</th>
                  <td>Kousik Das</td>
                  <td>kousikdas02</td>
                  <td>kousikdas02@gmail.com</td>
                  <td>kousik_1994</td>
                  <td>Singur</td>
                  <td>West Bengal</td>
                  <td>712407</td>
                  <td>27/11/1994</td>
                  <td>
                    <ul>
                      <li><button className="btn btn-warning">Edit</button></li>
                      <li><button className="btn btn-danger">Delete</button></li>
                    </ul>
                  </td>
                </tr> */}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
