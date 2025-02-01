import React from "react";
import CreateClass from "./CreateClass";
import JoinClass from "./JoinClass";

function StudentDashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>
      <p className="mt-4">Here you can answer questions and interact with the chatbot!</p>
      <JoinClass/>
    </div>
  );
}

export default StudentDashboard;
