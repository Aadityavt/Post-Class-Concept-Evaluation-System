import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JoinClass = () => {
  const { classCode } = useParams();
  const [message, setMessage] = useState('');

  const handleJoinClass = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/join-class/${classCode}/`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Class not found.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Join a Class</h1>
      <button
        onClick={handleJoinClass}
        className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 focus:outline-none"
      >
        Join Class
      </button>
      <p className="mt-4">{message}</p>
    </div>
  );
};

export default JoinClass;
