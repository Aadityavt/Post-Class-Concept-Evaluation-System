import React from "react";
import CreateClass from "./CreateClass";

function TeacherDashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
      <p className="mt-4">Here you can upload summaries and manage questions!</p>
      <CreateClass/>
    </div>
  );
}

export default TeacherDashboard;
