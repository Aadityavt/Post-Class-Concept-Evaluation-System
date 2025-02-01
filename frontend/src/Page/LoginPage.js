import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const AuthToggle = () => {
    const [isLogin, setIsLogin] = useState(true);  
    const toggleForm = () => {
        setIsLogin(!isLogin);  
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>

                {/* Conditionally render LoginForm or SignupForm */}
                {isLogin ? <LoginForm /> : <SignupForm />}

                <div className="mt-4 text-center">
                    <p className="text-sm">
                        {isLogin ? (
                            <>Don't have an account? <button onClick={toggleForm} className="text-indigo-600 hover:underline">Sign Up</button></>
                        ) : (
                            <>Already have an account? <button onClick={toggleForm} className="text-indigo-600 hover:underline">Login</button></>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthToggle;
