// components/UserLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputFeild'; // Adjust path if necessary
import { loginUser } from '../../services/api';

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = await loginUser(formData.email, formData.password);

      // Save token to localStorage to track login state
      localStorage.setItem('token', data.access_token);

      // Redirect to Homepage
      navigate('/'); 
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-neutral-800 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-neutral-800 dark:text-white p-8 rounded-xl shadow-md border border-gray-100 dark:shadow-amber-50 dark:shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center dark:text-white">Login to Your Account</h2>

        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
          error={errors.password}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default UserLogin;