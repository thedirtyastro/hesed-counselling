'use client';
import { useForm, ValidationError } from '@formspree/react';
import React, { useState } from 'react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xovqvreq");
  const [showSuccess, setShowSuccess] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    await handleSubmit(e); // Call form submission

    // If submission is successful
    if (state.succeeded) {
      setShowSuccess(true); // Show success message
      // Reset the form values
      setFormData({
        name: '',
        number: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="rounded-md bg-white p-6 ">
      
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-black">
        {/* Name Field */}
        <div>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name} // Controlled input
            onChange={handleChange} // Update state on change
            className="input w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Mobile Number Field */}
        <div>
          <input
            id="number"
            type="tel"
            name="number"
            placeholder="Mobile Number"
            value={formData.number} // Controlled input
            onChange={handleChange} // Update state on change
            pattern="[0-9]{10}" // Example of validation for 10-digit number
            className="input w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError prefix="Number" field="number" errors={state.errors} />
        </div>

        {/* Email Field */}
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email} // Controlled input
            onChange={handleChange} // Update state on change
            className="input w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message Field */}
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message} // Controlled input
            onChange={handleChange} // Update state on change
            className="input w-full p-2 border border-gray-300 rounded-md h-24"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-background rounded-md p-2 text-white  font-semibold border-4 border-background hover:shadow-xl "
          disabled={state.submitting}
        >
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>

      </form>

      {/* Success Alert */}
      {showSuccess && (
        <div className="text-white font-semibold mt-4">
          Thanks for your submission!
        </div>
      )}
    </div>
  );
};

export default Contact;
