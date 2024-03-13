
import React, { useState } from 'react';

const JobForm = ({ onSubmit }) => {

  const [newJob, setNewJob] = useState({
    role: '',
    requiredSkills: [],
    startDate: '',
    endDate: '',
    description: '',
    rewardedCertificate: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleSkillsChange = event => {
    const { options } = event.target;
    const selectedSkills = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setNewJob({ ...newJob, requiredSkills: selectedSkills });
  };


  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(newJob);
    setNewJob({
        role: '',
        requiredSkills: [],
        startDate: '',
        endDate: '',
        description: '',
        rewardedCertificate: ''
    });
  };

  return (
    <div className="bg-white p-8 rounded w-1/2">
      <h2 className="text-xl font-bold mb-4">Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="role">
            Role
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            type="text"
            name="role"
            value={newJob.role}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="requiredSkills">
            Required Skills
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="requiredSkills"
            name="requiredSkills"
            value={newJob.requiredSkills}
            onChange={handleSkillsChange}
            multiple
            required
          >

            <option value="">Select Required Skills</option>
            <option value="Skill 1">Skill 1</option>
            <option value="Skill 2">Skill 2</option>
            <option value="Skill 3">Skill 3</option>
            </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="startDate">
            Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startDate"
            type="date"
            name="startDate"
            value={newJob.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="endDate">
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endDate"
            type="date"
            name="endDate"
            value={newJob.endDate}
            onChange={handleInputChange}
            required
          />

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            name="description"
            value={newJob.description}
            onChange={handleInputChange}
            required
          />
          
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="rewardedCertificate">
            Rewarded Certificate
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rewardedCertificate"
            type="text"
            name="rewardedCertificate"
            value={newJob.rewardedCertificate}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Rewarded Certificate</option>
            <option value="Certificate 1">Certificate 1</option>
            <option value="Certificate 2">Certificate 2</option>
            <option value="Certificate 3">Certificate 3</option>
            </select>
          
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;
