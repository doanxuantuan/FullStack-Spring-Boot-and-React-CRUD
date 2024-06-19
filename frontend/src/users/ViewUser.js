import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

export default function ViewUser() {
  let nanvigate=useNavigate()

  const[user,setUser]=useState({
    name:"",
    username:"",
    email:""
  });
  const{id}=useParams()
  const loaduser=async()=>{
    const result=await axios.get(`http://localhost:8081/user/${id}`)
    return setUser(result.data);
  }
  useEffect(()=>{
    loaduser();
  },[])
  const clickBack=()=>{
    nanvigate("/");
  }
  return (
    <div class="container text-center" >
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">USERNAME</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={()=>clickBack()}>Back Home</button>
    </div>  
)
}
