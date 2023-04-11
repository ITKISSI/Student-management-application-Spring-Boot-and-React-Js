import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {

    let navigate=useNavigate();

    const[student,setStudent]=useState({
        name:"",
        username:"",
        email:""
    });

    const {name,username,email}=student;

    const onInputChange = (even) => {
        setStudent({...student,[even.target.name]:even.target.value});
    };

    const onSubmit = async (even) => {
        even.preventDefault();
        await axios.post("http://localhost:8080/student/add",student)
        navigate("/");
    };
    const onCancle = async (even) => {
        even.preventDefault();
        navigate("/");
    };

  return (
    <div className='container'>
        <div className="row">
             <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'> Register Student</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>Name</label>
                        <input type={"text"}
                                className='form-control'
                                placeholder='Enter name'
                                name="name"
                                value={name}
                                onChange={(e)=>onInputChange(e)}
                                />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Username' className='form-label'>Username</label>
                        <input type={"text"}
                                className='form-control'
                                placeholder='Enter username'
                                name="username"
                                value={username}
                                onChange={(e)=>onInputChange(e)}
                                />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>Email</label>
                        <input type={"text"}
                                className='form-control'
                                placeholder='Enter email'
                                name="email"
                                value={email}
                                onChange={(e)=>onInputChange(e)}
                                />
                    </div>
                    <button type='submit' onSubmit={(e)=>onSubmit(e)} className='btn btn-primary mx-2'>Submit</button>
                    <button type='reset' onClick={(e)=>onCancle(e)} className='btn btn-danger mx-2'>Cancel</button>
                </form>
             </div>
        </div>
    </div>
  )
}
