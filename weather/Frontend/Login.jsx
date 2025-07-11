import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/user/login/', formData);
      localStorage.setItem('access_token', res.data.token.access);
      localStorage.setItem('refresh_token', res.data.token.refresh);
      setSuccessMessage(res.data.msg);
      alert("Login successful!");
      navigate('/Profile'); // ✅ Redirect after login
    } catch (err) {
      if (err.response?.data?.errors?.non_field_errors) {
        setError(err.response.data.errors.non_field_errors[0]);
      } else {
        setError('Login failed. Please check credentials.');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <label>Email:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />

        <label>Password:</label><br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
