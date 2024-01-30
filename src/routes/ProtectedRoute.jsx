import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      const role = localStorage.getItem('role')
      if (!token) {
        navigate('/');
      }
    }, []);
  
    return children;
  };

export default ProtectedRoute
