import React from 'react';
import { Sun, Droplets, LayoutGrid, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sun className="h-12 w-12 text-green-600" />,
      title: "Interior & Exterior Window Cleaning",
      description: "Complete cleaning of all window surfaces, ensuring crystal clear views for students and staff."
    },
    {
      icon: <LayoutGrid className="h-12 w-12 text-green-600" />,
      title: "Screen & Track Cleaning",
      description: "Thorough cleaning of window screens and tracks to maintain proper ventilation and operation."
    },
    {
      icon: <Droplets className="h-12 w-12 text-green-600" />,
      title: "Hard Water Stain Removal",
      description: "Professional treatment to remove stubborn mineral deposits and hard water stains."
    },
    {
      icon: <Calendar className="h-12 w-12 text-green-600" />,
      title: "Scheduled Maintenance Plans",
      description: "Regular cleaning services scheduled around your academic calendar and budget."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive window cleaning services designed specifically for educational institutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 flex">
              <div className="mr-6 flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            We understand that every educational institution has unique needs. Contact us to discuss how we can create a customized cleaning plan for your facility.
          </p>
          <a 
            href="https://none297160.hbportal.co/schedule/670dbea6dea66f0019828f79"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition duration-300 inline-block"
          >
            Request a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;