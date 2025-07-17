import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';

const UserDashboard = () => {
  const [userInfo, setUserInfo] = useState({
    expiryDate: '',
    trafficUsed: 0,
    trafficLimit: 0,
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        const res = await axios.get('/api/user/me', config);
        setUserInfo(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserInfo();
  }, []);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('receipt', file);
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data',
        },
      };
      await axios.post('/api/payments/upload', formData, config);
      // TODO: show success message
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Expiry Date</h2>
          <p className="mt-2 text-3xl font-bold">
            {new Date(userInfo.expiryDate).toLocaleDateString()}
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Traffic Used</h2>
          <p className="mt-2 text-3xl font-bold">{userInfo.trafficUsed} GB</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Traffic Limit</h2>
          <p className="mt-2 text-3xl font-bold">{userInfo.trafficLimit} GB</p>
        </div>
      </div>
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold">Upload Payment Receipt</h2>
        <form onSubmit={onUpload} className="mt-6 space-y-6">
          <div>
            <input type="file" onChange={onFileChange} />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default UserDashboard;
