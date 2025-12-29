import React from 'react';
import { 
  Route, 
  createBrowserRouter, createRoutesFromElements, RouterProvider 
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
   const API_URL = import.meta.env.VITE_API_URL

  const addJob = async (newJob) => { 
    const res = await fetch(`${API_URL}/jobs`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  });
  if (!res.ok) throw new Error("Failed to add job")
  return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`${API_URL}/jobs/${id}`, {
      method: 'DELETE',
  });
  if (!res.ok) throw new Error("Failed to delete job")
  return;
  };

  // Edit Job
  const editJob = async(job) => {
    const res = await fetch(`${API_URL}/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  });
  
  if (!res.ok) throw new Error("Failed to edit job")
  return;

  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  
    <Route index element={<HomePage /> } />

    <Route 
    path='/jobs' 
    element={<JobsPage /> } 
    />

    <Route 
    path='/add-job' 
    element={<AddJobPage addJobSubmit={addJob}/> } 
    />

    <Route 
    path='*' 
    element={<NotFoundPage /> } 
    />

    <Route 
    path='/job/:id' 
    element={<JobPage deleteJob={ deleteJob }/> } 
    loader = {jobLoader}
     />

    <Route 
    path='/edit-job/:id' 
    element={<EditJobPage editedJobSubmit = {editJob}/>}
    loader = {jobLoader}  
    />
    
    
  
  </Route>
    
    )
  )

  return <RouterProvider router={router} /> 

}

export default App