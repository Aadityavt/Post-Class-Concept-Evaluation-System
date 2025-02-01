import React, { useState } from 'react';
import axios from 'axios';

const CreateClass = () => {
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [classCode, setClassCode] = useState('');

  const handleCreateClass = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/create-class/', {
        name: className,
        description: description
      });
      setClassCode(response.data.class_code);
    } catch (error) {
      console.error('Error creating class:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Create a Class</h1>
      <input
        type="text"
        placeholder="Class Name"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Class Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleCreateClass}
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Create Class
      </button>

      {classCode && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Class Created Successfully!</h2>
          <p>Share this link with your students:</p>
          <a
            href={`http://localhost:3000/join-class/${classCode}`}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Class Link
          </a>
        </div>
      )}
    </div>
  );
};

export default CreateClass;
