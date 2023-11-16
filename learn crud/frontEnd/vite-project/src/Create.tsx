import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Create = () => {
    const [Values, setValues] = useState({
        name:'',
        email:''
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventdefault();
        Axios.post('http://localhost:8081/user', Values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter name' className='form-control' 
                    onChange={e => setValues({...Values, name: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter email' className='form-control' 
                    onChange={e => setValues({...Values, email: e.target.value})}/>
                </div>

                    <button type='submit' className='btn btn-success text-black'>Submit</button>

            </form>
        </div>
    </div>
    </div>
  )
}

export default Create