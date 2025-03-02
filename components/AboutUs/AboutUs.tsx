import React from "react";

const teamMembers = [
  { name: "Alex Johnson", role: "CEO & Founder", image: "/images/alex.jpg" },
  { name: "Samantha Lee", role: "CTO & Lead Developer", image: "/images/samantha.jpg" },
  { name: "Michael Smith", role: "Head of Customer Support", image: "/images/michael.jpg" },
  { name: "Emily Davis", role: "Marketing Manager", image: "/images/emily.jpg" },
];

const About = () => {
  return (
    <section className="relative w-full min-h-screen text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed animate-bg-move z-0" 
           style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
      </div>

      {/* Content Wrapper to Keep Everything Visible */}
      <div className="relative z-10 bg-black bg-opacity-60 min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Company Overview */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About POSTACK SOLUTIONS</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          POSTACK SOLUTIONS is a cutting-edge hosting company dedicated to providing secure, scalable, and high-performance web hosting solutions.
        </p>

        {/* Mission Statement */}
        <div className="mt-10 p-6 bg-white text-black rounded-lg shadow-md max-w-3xl">
          <h2 className="text-2xl font-semibold text-blue-500">Our Mission</h2>
          <p className="text-lg md:text-xl mt-2">
            Our mission is to empower businesses and individuals with reliable, secure, and high-performance hosting services, ensuring a seamless online presence.
          </p>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="relative z-10 py-20 text-center bg-gray-900">
        <h2 className="text-2xl font-semibold text-blue-300 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white text-black shadow-md rounded-lg p-6">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company Values and Culture */}
      <div className="relative z-10 py-20 text-center bg-gray-800">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Our Values and Culture</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          We foster a culture of innovation, collaboration, and integrity. Our core values include:
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-3xl text-white space-y-2">
          <li><span className="font-semibold">Customer Commitment:</span> Exceeding client expectations.</li>
          <li><span className="font-semibold">Integrity:</span> Honest and transparent business practices.</li>
          <li><span className="font-semibold">Innovation:</span> Continuously improving our services.</li>
          <li><span className="font-semibold">Teamwork:</span> Supporting each other to achieve shared goals.</li>
        </ul>
      </div>

      {/* Visual Identity */}
      <div className="relative z-10 py-20 text-center bg-gray-900">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Our Visual Identity</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Our brand reflects professionalism, innovation, and trust through visual elements.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src="/images/graphic1.jpg" alt="Graphic 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/images/graphic2.jpg" alt="Graphic 2" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/images/graphic3.jpg" alt="Graphic 3" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Commitment to Excellence */}
      <div className="relative z-10 py-20 text-center bg-gray-800">
        <div className="p-6 bg-white text-black rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Commitment to Excellence</h2>
          <p className="text-lg md:text-xl">
            We strive for excellence by delivering superior hosting solutions tailored to our clients' needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
