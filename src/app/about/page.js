"use client"

import { useEffect, useState } from 'react';


function page() {

    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/api/users", {
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDelete = () => {
        fetch("http://localhost:3000/api/users", {
            method: "delete"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const handlePost = () => {
        fetch("http://localhost:3000/api/users", {
            method: "post"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleUpdate = () => {
        fetch("http://localhost:3000/api/users/565", {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const handleDynamicDelete = () => {
        fetch("http://localhost:3000/api/users/54", {
            method: "Delete"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className=''>
            <div>
                <p>About page</p>
                <div className='space-x-5'>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handlePost}>Post</button>
                    <button onClick={handleUpdate}>Put</button>
                    <button onClick={handleDynamicDelete}>Dynamic Delete</button>
                </div>
                <div>
                    {
                        // users.map(u => <p>{u.name}</p>)
                    }
                </div>
            </div >
        </div >

    );
};



export default page;