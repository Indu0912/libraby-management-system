import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/auth/login', { email, password, role });
            localStorage.setItem('authToken', data.token);
            if (role === 'admin') {
                history.push('/admin-dashboard');
            } else {
                history.push('/user-dashboard');
            }
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;