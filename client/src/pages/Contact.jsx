import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact max-w-md mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">How can we help?</h2>
        <p>Please use the list below to find the best method of contact for your needs</p>
      </div>
      <div className="mb-4">
        <br />
        <h3 className="text-lg font-semibold">Call us:</h3>
        <ul>
          <li>Main Phone number: 555-555-1234</li>
          <li>Toll Free Number: 800-123-4567 </li>
          <li>Emergency Line: 911 </li>
        </ul>
      </div>
      <br />
      <div className="text-lg font-semibold">Email us directly</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Invalid email address"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
        </form>
      </div>
      <br />
      <div>
        <h3 className="text-lg font-semibold">Location</h3>
        <p>123 Corporate Blvd Suite 500,</p>
        <p>Toronto, ON M5V 2M5, Canada</p>
      </div>
    </div>
  );
}