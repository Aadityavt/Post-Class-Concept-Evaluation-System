// SignupForm.jsx
import React, { useState } from 'react';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');  // Default role is 'student'

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add API request to signup here
        fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, role }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle signup success or redirect based on role
            if (data.role === 'student') {
                // Navigate to student dashboard
            } else if (data.role === 'teacher') {
                // Navigate to teacher dashboard
            }
        })
        .catch(err => console.error('Signup failed', err));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
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
            <div>
                <select 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </div>
            <div>
                <button type="submit" className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default SignupForm;

