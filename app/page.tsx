import React from 'react';
import AboutUs from '@/components/AboutUs/AboutUs'; // Adjust path if needed
import Hosting from '@/components/Hosting/Hosting'; // Adjust the import path as necessary
import HostingServiceRequestForm from '@/components/Hosting/HostingServiceRequestForm'; // Adjust the import path as necessary
import Review from '@/components/Review/Review'; // Adjust the import path as necessary
import ContactForm from '@/components/ContactUs/ContactForm'; // Adjust path if needed

const HomePage = () => {
  return (
    <div className="overflow-hidden">
    <AboutUs />
    <Hosting />
    <Review />
    <ContactForm />
  </div>
  );
};

export default HomePage;
