import React from "react";
import { Link } from "react-router-dom";

function UserTypeSelection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Choose Your Role</h2>
      <div className="flex gap-4">
        <Link to="/student-dashboard">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            I am a Student
          </button>
        </Link>
        <Link to="/teacher-dashboard">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            I am a Teacher
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserTypeSelection;
