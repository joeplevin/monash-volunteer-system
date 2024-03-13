
import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    yearOfStudy: '',
    completedJobs: '',
    certificates: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(newStudent);
    setNewStudent({
      name: '',
      yearOfStudy: '',
      completedJobs: '',
      certificates: ''
    });
  };

  return (
    <div className="bg-white p-8 rounded w-1/2">
      <h2 className="text-xl font-bold mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="yearOfStudy">
            Year of Study
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="yearOfStudy"
            type="text"
            name="yearOfStudy"
            value={newStudent.yearOfStudy}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="completedJobs">
            Completed Jobs
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="completedJobs"
            type="text"
            name="completedJobs"
            value={newStudent.completedJobs}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="certificates">
            Certificates
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="certificates"
            type="text"
            name="certificates"
            value={newStudent.certificates}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
