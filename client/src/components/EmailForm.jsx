import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_iam6l9v', 'template_3da2pfh', formData, 'QIqWphxSldyzEaUyK')
      .then((response) => {
        setStatus('SUCCESS');
        setFormData({
          name: '',
          companyName: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        setStatus('FAILED');
      });
  };

  return (
    <div className=" form-body">
      <p className='dot'>.</p>
      <h1 className="ms-5 form-title mb-4 mt-5">How can we help you!</h1>
      <p className='form-line fs-5 ms-5 mb-5'>Just fill out the form below and we’ll get back to you as soon as possible (usually within one business day).</p>
      <p className='dot mb-5'>.</p>
    
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="row top mb-3">
          <div className="col-10 col-md-5 col-xl-5 mx-4 mx-md-3 ms-lg-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control input py-4"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-10 col-md-5 col-lg-5 mx-4 mx-md-3  mt-5 mt-md-0">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="form-control input py-4"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row top mb-0 mb-md-2">
          <div className="col-10 col-md-5 col-lg-5 mx-4 mx-md-3 ms-lg-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control input py-4 my-5"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-10 col-md-5 col-lg-5  mx-4 mx-md-0 mx-lg-3">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="form-control input py-4  mb-5 my-md-5"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-11 ps-md-5 me-md-0 col-md-11 col-lg-11 mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-control area "
            rows="7"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="text-end">
          <button type="submit" className="btn px-5 me-5 mb-5 mt-2">
            {status === 'SUCCESS' ? 'Sent!' : 'Send'}
          </button>
          {status === 'FAILED' && <p className="text-danger mt-3">Failed to send message. Please try again.</p>}
        </div>
      </form>
    </div>
  );
}
