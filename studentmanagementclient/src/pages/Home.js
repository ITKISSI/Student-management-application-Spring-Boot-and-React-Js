import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [students,setStudent]=useState([])
    useEffect(()=>{
        loadStudents();
    },[])

    const loadStudents=async () =>
    {
        const result = await axios.get("http://localhost:8080/student/getAll");
        setStudent(result.data);
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>

    {
        students.map((student,index)=>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{student.name}</td>
                <td>{student.username}</td>
                <td>{student.email}</td>
                <td>
                    <a className='btn btn-danger'>delete</a> 
                    <a className='btn btn-success'>edit</a>
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
