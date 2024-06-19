import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import EditUser from '../users/EditUser';
export default function Home() {
    const [users,setUser]=useState([]);
    const{id}=useParams()
    useEffect(()=>{
        getUser();
    },[])
    const getUser=async ()=>{
        const result=await axios.get("http://localhost:8081/users");
        setUser(result.data);
    }
    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8081/user/${id}`)
        getUser();
    }
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>(
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td >{user.name}</td>
                            <td >{user.username}</td>
                            <td >{user.email}</td>
                            <td>
                                <Link className='btn btn-primary mx-2' to={`viewuser/${user.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                                <button onClick={()=>deleteUser(user.id)} className='btn btn-danger mx-2'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
               
            </tbody>
            </table>
        </div>
    </div>
  )
}
