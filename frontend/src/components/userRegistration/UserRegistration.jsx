import React, { useState } from 'react';
import InputField from '../InputFeild';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // Tracks success state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    
    if (!formData.password) {
      tempErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://api.social.bhors.com/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,       // Matches FastAPI UserCreate schema
            password: formData.password  // Matches FastAPI UserCreate schema
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          const errorMsg = Array.isArray(data.detail) ? data.detail[0].msg : (data.detail || 'Registration failed');
          throw new Error(errorMsg);
        }

        // Success state update
        setIsRegistered(true);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-neutral-800 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-neutral-800 dark:text-white p-8 rounded-xl shadow-md border border-gray-100 dark:shadow-amber-50 dark:shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center dark:text-white">Create an Account</h2>

        {isRegistered && (
          <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 text-sm rounded-lg text-center font-medium">
            Registration successful! You can now log in.
          </div>
        )}

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
          placeholder="••••••••"
          error={errors.password}
        />

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          disabled={isSubmitting || isRegistered}
          className={`w-full mt-4 font-semibold py-2.5 rounded-lg transition-colors duration-200 text-white ${
            isRegistered 
              ? 'bg-green-600 cursor-not-allowed' 
              : isSubmitting 
              ? 'bg-blue-300 cursor-wait' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isRegistered ? 'Registered' : isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;