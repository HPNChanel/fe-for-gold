import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No authentication token found.');
        
        const response = await axios.get('http://127.0.0.1:8000/api/users/me/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data);
      } catch (err) {
        console.error('Error fetching profile data:', err);
        setError('Failed to load profile data. Please log in again.');
        localStorage.removeItem('authToken'); // Clear invalid token
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="profile-loading">Loading...</div>;
  }

  if (error) {
    return <div className="profile-error">{error}</div>;
  }

  return (
    <div className="user-profile-page">
      <div className="profile-container">
        <h1 className="profile-header">User Profile</h1>
        <div className="profile-card">
          <p><strong>Username:</strong> <span className="profile-value">{profileData.username}</span></p>
          <p><strong>Email:</strong> <span className="profile-value">{profileData.email}</span></p>
          <p><strong>Phone:</strong> <span className="profile-value">{profileData.phone_number}</span></p>
          <p><strong>Address:</strong> <span className="profile-value">{profileData.address}</span></p>
          <p><strong>Role:</strong> <span className="profile-value">{profileData.role}</span></p>
          <p><strong>Created At:</strong> <span className="profile-value">{new Date(profileData.created_at).toLocaleDateString()}</span></p>
        </div>
        <button className="back-button" onClick={handleBackToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default UserProfile;
