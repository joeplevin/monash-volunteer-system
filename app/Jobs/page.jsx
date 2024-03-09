"use client";
import React from 'react'
import VolunteeringSchedule from '/app/(components)/VolenteeringSchedule';
import Navbar from "/app/(components)/Navbar";

const page = () => {
    const activeVolunteeringJobs = [
        { id: 1, title: "Job 1", description: "Description of job 1", date: "10-03-2024", location: "Location 1" },
        { id: 2, title: "Job 2", description: "Description of job 2", date: "11-03-2024", location: "Location 2" },
        { id: 1, title: "Job 3", description: "Description of job 3", date: "20-03-2024", location: "Location 3" },
        { id: 2, title: "Job 4", description: "Description of job 4", date: "23-03-2024", location: "Location 4" },
        { id: 1, title: "Job 5", description: "Description of job 5", date: "30-03-2024", location: "Location 5" },
        { id: 2, title: "Job 6", description: "Description of job 6", date: "12-04-2024", location: "Location 6" },
      ];

      const volunteeringOpportunities = [
        { id: 1, title: "Option 1", description: "Description of option 1", date: "15-04-2024", location: "Location 1" },
        { id: 2, title: "Option 2", description: "Description of option 2", date: "18-04-2024", location: "Location 2" },
        { id: 1, title: "Option 3", description: "Description of option 3", date: "20-04-2024", location: "Location 3" },
        { id: 2, title: "Option 4", description: "Description of option 4", date: "12-05-2024", location: "Location 4" },
       
      ];

      const completedJobs = [
        { id: 1, title: "Job 1", description: "Completed", date: "18-01-2024", location: "Location 1" },
        { id: 2, title: "Job 2", description: "Completed", date: "22-01-2024", location: "Location 2" },
        { id: 1, title: "Job 3", description: "Completed", date: "12-02-2024", location: "Location 3" },
        { id: 2, title: "Job 4", description: "Completed", date: "27-02-2024", location: "Location 4" },
        { id: 1, title: "Job 5", description: "Completed", date: "29-02-2024", location: "Location 5" },
        { id: 2, title: "Job 6", description: "Completed", date: "03-03-2024", location: "Location 6" },
        { id: 1, title: "Job 7", description: "Completed", date: "08-03-2024", location: "Location 7" },
       
      ];
      const chunkedOpportunities = Array.from({ length: Math.ceil(volunteeringOpportunities.length / 4) }, (_, index) =>
    volunteeringOpportunities.slice(index * 4, index * 4 + 4)
    );
  return (

    <>
    <Navbar />
    <div className="mt-4" style={{ background: "linear-gradient(to bottom, #e5e5e5, #a3a3a3)" }}>
    <div><h1>Volenteering</h1></div>
    <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Active Jobs: </h2>
          {activeVolunteeringJobs.map((job) => (
              <VolunteeringSchedule key={job.id} job={job} />
          ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Opportunities: </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {chunkedOpportunities.map((chunk, index) => (
            <React.Fragment key={index}>
              {chunk.map((opportunity) => (
                <VolunteeringSchedule key={opportunity.id} job={opportunity} />
              ))}
            </React.Fragment>
          ))}
      </div>
        </div>

        <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Completed: </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {completedJobs.map((completed) => (
            <div key={completed.id} className="bg-gray-200 p-4 rounded-md">
              <VolunteeringSchedule job={completed} />
            </div>
          ))}
      </div>
      </div>
      </div>



      </>
  )
}

export default page