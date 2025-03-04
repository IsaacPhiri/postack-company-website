'use client';
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AboutUs from '@/components/AboutUs/AboutUs';
import Hosting from '@/components/Hosting/Hosting';
import Review from '@/components/Review/Review';
import ContactForm from '@/components/ContactUs/ContactForm';

const HomePage = () => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const aboutUsSection = document.getElementById('about-us');
      const hostingSection = document.getElementById('hosting');
      const reviewSection = document.getElementById('review');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust for earlier detection

      let newTitle = 'POSTACK SOLUTIONS - Home';

      if (aboutUsSection && hostingSection && scrollPosition >= aboutUsSection.offsetTop && scrollPosition < hostingSection.offsetTop) {
        newTitle = 'About Us - POSTACK SOLUTIONS';
      } else if (hostingSection && reviewSection && scrollPosition >= hostingSection.offsetTop && scrollPosition < reviewSection.offsetTop) {
        newTitle = 'Hosting Solutions - POSTACK SOLUTIONS';
      } else if (reviewSection && contactSection && scrollPosition >= reviewSection.offsetTop && scrollPosition < contactSection.offsetTop) {
        newTitle = 'Reviews - POSTACK SOLUTIONS';
      } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
        newTitle = 'Contact Us - POSTACK SOLUTIONS';
      }

      if (document.title !== newTitle) {
        document.title = newTitle; //Directly updates browser tab title
        console.log('Updated Page Title:', newTitle);
      }
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      
      <Head>



<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "POSTACK SOLUTIONS",
  "url": "https://postacksolutions.com",
  "logo": "https://postacksolutions.com/logo.png",  // Replace with your logo URL
  "sameAs": [
    "https://www.facebook.com/yourpage",  // Replace with your social media links
    "https://twitter.com/yourprofile",
    "https://www.linkedin.com/in/yourprofile"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-5555",  // Replace with your contact number
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": "English"
  }
}
</script>
        <title>POSTACK SOLUTIONS - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn more about POSTACK SOLUTIONS, our team, mission, and values." />
        <meta name="keywords" content="web hosting,cloud services website development, postack Solutions, secure hosting, scalable servers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden">
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="hosting">
          <Hosting />
        </div>
        <div id="review">
          <Review />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default HomePage;
