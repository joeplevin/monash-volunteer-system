"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import VolunteeringSchedule from '/app/(components)/VolenteeringSchedule'
import TaskForm from '/app/(components)/TaskForm';
import Navbar from "/app/(components)/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';


const page = () => {
    const volunteeringJobs = [
        { id: 1, title: "Job 1", description: "Description of job 1", date: "2024-03-10", location: "Location 1" },
        { id: 2, title: "Job 2", description: "Description of job 2", date: "2024-03-11", location: "Location 2" },
      ];

// Define state to store the list of tasks
const [tasks, setTasks] = useState([]);


  // Function to add a new task to the list
  const addTask = (taskName) => {
    const newTask = { id: tasks.length + 1, name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task from the list
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
   <Router>
    <>
    <Navbar />
    <div className="mt-4" style={{ background: "linear-gradient(to bottom, #e5e5e5, #a3a3a3)" }}>
    <div className ="mt-4"><h1 className="mb-10">Dashboard</h1>
    <Container>
    <Row className="justify-content-between">
    <Link to="/Students">
          <button className="bg-slate-400 text-black px-8 py-10 rounded-lg mr-20">
            Total Students
        </button>
        </Link>
        <Link to="/Jobs">
          <button className="bg-slate-400 text-black px-10 py-10 rounded-lg mr-20">
            Active Jobs
        </button>
        </Link>
          <button className="bg-slate-400 text-black px-6 py-10 rounded-lg">
            Current Charities
        </button>
          </Row>
          </Container>

          <div className="task-form">
        {/* TaskForm component to add new tasks */}
        <TaskForm onAddTask={addTask} />
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggleCompletion={toggleTaskCompletion}
          />
          ))}
      </div>

          <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">This Week: </h2>
        {volunteeringJobs.map((job) => (
          <VolunteeringSchedule key={job.id} job={job} />
        ))}
      </div>
          </div>
          </div>
          </>
          </Router>
          )
          }

          export default page