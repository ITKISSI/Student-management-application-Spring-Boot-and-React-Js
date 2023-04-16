import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const {id}=useParams();

    const [students,setStudent]=useState([])
    useEffect(()=>{
        loadStudents();
    },[])

    const loadStudents=async () =>
    {
        const result = await axios.get("http://localhost:8080/student/students");
        setStudent(result.data);
    };

    const deleteStudent = async (id)=>
    {
      await axios.delete(`http://localhost:8080/student/delete/${id}`);
      loadStudents();
    }

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
                    <Link className='btn btn-outline-primary mx-2' to="/view">View</Link> 
                    <Link className='btn btn-outline-success mx-2' to={`/edit/${student.id}`}>Edit</Link>
                    <Link className='btn btn-outline-danger mx-2' onClick={()=>deleteStudent(student.id)}>Delete</Link> 
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
