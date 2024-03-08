"use client";
import React, { useState } from 'react';
import StudentForm from '/app/(components)/NewStudentForm';



const StudentPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', yearOfStudy: 2, completedJobs: 5, certificates: 2 },
    { id: 2, name: 'Jane Smith', yearOfStudy: 3, completedJobs: 7, certificates: 3 },
    // Add more students as needed
  ]);

  const handleAddStudent = newStudent => {
    // Generate unique id for the new student
    newStudent.id = Math.max(...students.map(student => student.id), 0) + 1;
    setStudents([...students, newStudent]);
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Student Volunteer List</h1>
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Add New Student
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <StudentForm onSubmit={handleAddStudent} />
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Year of Study</th>
              <th className="px-4 py-2">Completed Jobs</th>
              <th className="px-4 py-2">Certificates</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.yearOfStudy}</td>
                <td className="border px-4 py-2">{student.completedJobs}</td>
                <td className="border px-4 py-2">{student.certificates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentPage;
