import React from 'react';
import MainLayout from '../layout/MainLayout';

const Dashboard = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Total Users</h2>
          <p className="mt-2 text-3xl font-bold">1,234</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Online Users</h2>
          <p className="mt-2 text-3xl font-bold">56</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Total Traffic</h2>
          <p className="mt-2 text-3xl font-bold">12.3 TB</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Revenue</h2>
          <p className="mt-2 text-3xl font-bold">$1,234</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
