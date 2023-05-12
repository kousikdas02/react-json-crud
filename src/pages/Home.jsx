import React from "react";
import "../assets/css/style.css"

const Home = () => {
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
                <tr>
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
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
