import React from 'react'
import { useEffect, useState} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';



function Home() {
    const [Data , setData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <h2>User List</h2>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Create +</Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((user, index) => {
                    return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                            <button className='btn btn-sm btn-info'>Update user</button>
                                <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                                <button className='btn btn-sm btn-danger'>Delete</button>
                            </td>

                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home