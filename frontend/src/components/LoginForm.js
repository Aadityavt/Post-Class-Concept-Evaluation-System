import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');  // Changed email to username
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // To navigate after login

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add API request to login here
        fetch('/api/accounts/login/', {  // Ensure correct endpoint
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),  // Send username instead of email
        })
        .then(response => response.json())
        .then(data => {
            // Check if the login was successful and handle based on role
            if (data.role === 'student') {
                // Store the user role in localStorage (optional)
                localStorage.setItem('role', 'student');
                navigate('/student-dashboard');  // Navigate to student dashboard
            } else if (data.role === 'teacher') {
                // Store the user role in localStorage (optional)
                localStorage.setItem('role', 'teacher');
                navigate('/teacher-dashboard');  // Navigate to teacher dashboard
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
