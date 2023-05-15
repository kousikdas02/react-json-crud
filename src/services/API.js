import axios from "axios";


const API_URL = "http://127.0.0.1:3002/users";

// add user api
export const addUser = async data => {
    try {
        return await axios.post(API_URL, data) 
    } catch (error) {
        console.log('Error while calling Add User API', error);
    }
}


// get all user api
export const getAllUsers = async () =>{
    try {
        return await axios.get(API_URL)
    } catch (error) {
        console.log('Error while calling Get All Users API', error);
    }
}


// get each user api
export const getEachUser = async data => {
    try {
        return await axios.get(`${API_URL}/${data}`)
    } catch (error) {
        console.log("Error while calling Get Each User API", error);
    }
}


// edit user api
export const editUser = async(data, id) =>{
    try {
        return await axios.put(`${API_URL}/${id}`, data)
    } catch (error) {
        console.log("Error while calling Edit User API", error);
    }
}


// delete user api
export const deleteUser = async id => {
    try {
        return await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
        console.log("Error while calling Delete User API");
    }
}
