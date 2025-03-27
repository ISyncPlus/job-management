import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewJobs from '../components/ViewJobs';

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome = {true} />
        <ViewJobs />
     </>
  )
}

export default HomePage

