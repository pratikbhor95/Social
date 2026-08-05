import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import UserRegistration from './components/userRegistration/UserRegistration';
import UserLogin from './components/userLogin/UserLogin';
import Home from './components/home/Home';

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* Navbar stays visible on all pages */}
      <Navbar />

      {/* Define the routes/pages */}
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </Router>
  )
}

export default App