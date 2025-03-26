import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "California School Windows has transformed our campus. The students and faculty constantly comment on how much brighter their classrooms feel, and our maintenance staff appreciates their professional service.",
      author: "Satisfied Client",
      position: "California School Windows"
    },
    {
      quote: "We've tried other window cleaning services, but none compare to the attention to detail and care that California School Windows provides. They understand the unique needs of educational institutions.",
      author: "Satisfied Client",
      position: "California School Windows"
    },
    {
      quote: "The team is always respectful of our academic schedule and works around our needs. The windows are spotless, and the service is consistently excellent. Highly recommended!",
      author: "Satisfied Client",
      position: "California School Windows"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what educational institutions across California have to say about our services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
              <div className="mb-4 text-green-600">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 flex-grow italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-green-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;