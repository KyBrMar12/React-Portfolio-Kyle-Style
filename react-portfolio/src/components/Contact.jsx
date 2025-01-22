import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    // Clear error when the user starts typing
    if (value.trim() !== '') {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleValidation = (name, value) => {
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
      if (value.trim() === '') {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'Email is required',
        }));
      } else if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'Invalid email address',
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      }
    } else {
      if (value.trim() === '') {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'This field is required',
        }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    handleValidation(name, value);
  };

  const handleMouseLeave = (e) => {
    const { name, value } = e.target;
    handleValidation(name, value);
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            onBlur={handleBlur}
            onMouseLeave={handleMouseLeave}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onMouseLeave={handleMouseLeave}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            onBlur={handleBlur}
            onMouseLeave={handleMouseLeave}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;