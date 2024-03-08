
import React from 'react';

const VolunteeringSchedule = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-2">{job.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Date: {job.date}</p>
        <p className="text-sm text-gray-500">Location: {job.location}</p>
      </div>
    </div>
  );
};

export default VolunteeringSchedule;
