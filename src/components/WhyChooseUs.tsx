import React from 'react';
import { CheckCircle, Shield, Clock, School } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <School className="h-10 w-10 text-green-600" />,
      title: "Education Specialists",
      description: "We understand the unique needs of schools, colleges, and educational facilities."
    },
    {
      icon: <Clock className="h-10 w-10 text-green-600" />,
      title: "Flexible Scheduling",
      description: "We work around your academic calendar to minimize disruptions."
    },
    {
      icon: <Shield className="h-10 w-10 text-green-600" />,
      title: "Safety First",
      description: "Fully insured with strict safety protocols for educational environments."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-green-600" />,
      title: "Custom Solutions",
      description: "Tailored services based on your institution's specific needs."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Why Choose California School Windows?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We understand that clean, streak-free windows do more than just enhance your building's appearance—they create an optimal learning environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2 text-center">{reason.title}</h3>
              <p className="text-gray-700 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-green-100 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Creating Better Learning Environments</h3>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
            Natural light improves student performance and well-being. Clean windows ensure maximum daylight reaches your classrooms, creating an optimal learning environment.
          </p>
          <div className="text-center">
            <a 
              href="https://none297160.hbportal.co/schedule/670dbea6dea66f0019828f79"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;