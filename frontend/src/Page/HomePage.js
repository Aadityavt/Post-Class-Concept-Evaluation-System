// src/components/HomePage.js

import React from "react";
import { Link,useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();  // Use React Router's useNavigate hook to navigate programmatically

  // Function to handle "Get Started" button click
  const handleGetStarted = () => {
    const userRole = localStorage.getItem("role");  // Check if role is stored in localStorage

    if (userRole === "student") {
      // If user is a student, navigate to the student dashboard
      navigate("/student-dashboard");
    } else if (userRole === "teacher") {
      // If user is a teacher, navigate to the teacher dashboard
      navigate("/teacher-dashboard");
    } else {
      // If user is not logged in, show a message and redirect to login page
      alert("Please log in first.");
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Smart Learning Platform</h1>
      <div className="flex gap-4">
        <button
          onClick={handleGetStarted}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Get Started
        </button>
        <Link to="/login">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
