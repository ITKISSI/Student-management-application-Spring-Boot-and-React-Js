import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewStudent() {

  const {id}=useParams();

  const[student,setStudent]=useState({
      name:"",
      username:"",
      email:""
  });

  useEffect(()=>{

    loadStudent();

  },[]);

  const loadStudent = async ()=>{
    const result = await axios.get(`http://localhost:8080/student/getStudent/${id}`)
    setStudent(result.data)
  }

  return (
    <div className='container'>
      <div className="row">
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
              <h2 className='text-center m-4'>Student details </h2>

              <div className='card'>
                <div className='card-header'>

                  Detail for student id: {student.id}
                  <ul className='list-group list-group-flush'>

                      <li className='list-group-item'>
                        <b>Name:</b>
                        {student.name}
                      </li>

                      <li className='list-group-item'>
                        <b>UserName:</b>
                        {student.username}
                      </li>

                      <li className='list-group-item'>
                        <b>Email:</b>
                        {student.email}
                      </li>

                  </ul>
                  
                </div>
              </div>
          <Link className='btn btn-primary my-2' to={'/'}> Home </Link>
          </div>
      </div>
    </div>
  )
}
