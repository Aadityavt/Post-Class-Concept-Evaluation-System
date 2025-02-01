import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === "student") {
      navigate("/student-dashboard");
    } else {
      navigate("/teacher-dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <div className="mb-4">
        <label className="mr-4 text-lg">I am a:</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
