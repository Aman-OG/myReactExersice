import { useState, useEffect } from 'react';
import axios from 'axios';

    const Users = () => {
    const [users, setUsers] = useState([]);

    // GET users
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .catch(err => console.error('GET error:', err));
    }, []);

    // POST (Add a new user)
    const addUser = () => {
        axios.post('https://jsonplaceholder.typicode.com/users', {
        name: 'New User',
        email: 'newuser@example.com'
        })
        .then(res => console.log('POST success:', res.data))
        .catch(err => console.error('POST error:', err));
    };

    // PUT (Update user ID 1)
    const updateUser = () => {
        axios.put('https://jsonplaceholder.typicode.com/users/1', {
        name: 'Updated Name',
        email: 'updated@example.com'
        })
        .then(res => console.log('PUT success:', res.data))
        .catch(err => console.error('PUT error:', err));
    };

    // DELETE user ID 1
    const deleteUser = () => {
        axios.delete('https://jsonplaceholder.typicode.com/users/1')
        .then(res => console.log('DELETE success:', res))
        .catch(err => console.error('DELETE error:', err));
    };

    return (
        <div>
        <h2>User List:</h2>
        <button onClick={addUser}>Add User</button>
        <button onClick={updateUser}>Update User 1</button>
        <button onClick={deleteUser}>Delete User 1</button>
        <ul>
            {users.map(user => (
            <li key={user.id}>{user.name} — {user.email}</li>
            ))}
        </ul>
        </div>
    );
    };

export default Users;
