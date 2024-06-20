'use client';
import React, { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form will be submitted..");

    emailjs.send("service_zrtjhak", "template_4aobjvg",
      {
        from_name: formData.name,
        to_name: "Mohit",
        from_email: formData.email,
        to_email: "mohit303600@gmail.com",
        message: `Phone Number: ${formData.phone}, Message: ${formData.message}, Email: ${formData.email}`,
      },
      "cqYn0rVFH13NbE7cl"
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, (err) => {
      console.log('FAILED...', err);
      // Clear the form even if submission failed
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
  
      <h1 className={`relative mt-10 text-4xl md:text-6xl lg:text-7xl mb-10 font-bold w-full m-auto flex justify-center items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact</h1>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 mb-4">
          <label htmlFor="name" className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Name</label>
          <input
            id="name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`input-class border rounded-lg p-2 ${isDarkMode ? 'text-black' : 'text-black'} bg-${isDarkMode ? 'white' : 'gray-200'}`}
          />
        </div>
        <div className="flex flex-col space-y-2 mb-4">
          <label htmlFor="email" className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Email</label>
          <input
            id="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-class rounded-lg border p-2 ${isDarkMode ? 'text-black' : 'text-black'} bg-${isDarkMode ? 'white' : 'gray-200'}`}
          />
        </div>
        <div className="flex flex-col space-y-2 mb-4">
          <label htmlFor="phone" className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Phone Number</label>
          <input
            id="phone"
            placeholder="Phone Number"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            className={`input-class rounded-lg border p-2 ${isDarkMode ? 'text-black' : 'text-black'} bg-${isDarkMode ? 'white' : 'gray-200'}`}
          />
        </div>
        <div className="flex flex-col space-y-2 mb-4">
          <label htmlFor="message" className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`input-class rounded-lg border p-2 ${isDarkMode ? 'text-black' : 'text-black'} bg-${isDarkMode ? 'white' : 'gray-200'} h-32`}
          />
        </div>
        <button
          className="bg-gradient-to-br from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
