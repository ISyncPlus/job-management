import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'

const JobListings = ({ isHome = false }) => {
  // const recentJobs = isHome ? jobs.slice(0, 3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchJobs = async () => {
      try {
        const res = await fetch('https://mock-jobs-back.onrender.com/jobs');
        const data = await res.json();
        setJobs(data);
      } catch(error) {
        console.log('Error Fetching Data', error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs()
   }, []);

   const recentJobs = isHome ? jobs.slice(0, 3) : jobs;


  return (
  <section className="bg-blue-50 px-4  py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       {isHome ? 'Browse Jobs' : 'Available Jobs' }
      </h2>
      
        { loading ? (
          <Spinner loading={loading}/>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          { recentJobs.map((job)=> {
          return(
            <JobListing key= {job.id} job= { job } />
          )}) }

          </div>
          
        )   }
        
      
    </div>
  </section>
  )
}

export default JobListings
