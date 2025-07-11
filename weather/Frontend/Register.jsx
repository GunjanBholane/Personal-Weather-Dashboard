import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    password: '',
    password2: '',
    tc: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const isStrongPassword = (password) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    const clientErrors = {};
    if (!isStrongPassword(formData.password)) {
      clientErrors.password = ['Password must include uppercase, lowercase, number, and symbol.'];
    }
    if (formData.password !== formData.password2) {
      clientErrors.password2 = ['Passwords do not match'];
    }
    if (!formData.tc) {
      clientErrors.tc = ['You must agree to terms'];
    }

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/register/', formData);
      localStorage.setItem('user_city', formData.city); // ✅ optional city saving
      localStorage.setItem('access_token', response.data.token.access); // store token if needed
      localStorage.setItem('refresh_token', response.data.token.refresh);
      alert('Registration successful!');
      navigate('/Profile'); // redirect after register
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert('Registration failed. Check console.');
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        {errors.name && <p className="error">{errors.name[0]}</p>}

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="error">{errors.email[0]}</p>}

        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        {errors.city && <p className="error">{errors.city[0]}</p>}

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        {errors.password && <p className="error">{errors.password[0]}</p>}

        <label>Confirm Password:</label>
        <input type="password" name="password2" value={formData.password2} onChange={handleChange} required />
        {errors.password2 && <p className="error">{errors.password2[0]}</p>}

        <label>
          <input type="checkbox" name="tc" checked={formData.tc} onChange={handleChange} /> I agree to terms
        </label>
        {errors.tc && <p className="error">{errors.tc[0]}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}
