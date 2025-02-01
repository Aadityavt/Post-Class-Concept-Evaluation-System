import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/api/accounts/login/', {  
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }), 
        })
        .then(response => response.json())
        .then(data => {
            if (data.role === 'student') {
                localStorage.setItem('role', 'student');
                navigate('/student-dashboard'); 
            } else if (data.role === 'teacher') {
                localStorage.setItem('role', 'teacher');
                navigate('/teacher-dashboard'); 
            } else {
                setError('Invalid role or credentials');
            }
        })
        .catch(err => setError('Login failed'));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input 
                    type="text"  // Change type to text for username
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    required 
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    required 
                />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div>
                <button type="submit" className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
