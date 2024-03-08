import React from 'react';

const StudentDetailsPage = ({ student }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      <div>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Year of Study:</strong> {student.yearOfStudy}</p>
        <p><strong>Completed Jobs:</strong> {student.completedJobs}</p>
        <p><strong>Certificates:</strong> {student.certificates}</p>
      </div>
    </div>
  );
};

export default StudentDetailsPage;
