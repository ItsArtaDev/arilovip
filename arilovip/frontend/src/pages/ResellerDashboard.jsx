import React from 'react';
import MainLayout from '../layout/MainLayout';

const ResellerDashboard = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Reseller Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Your Users</h2>
          <p className="mt-2 text-3xl font-bold">123</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Your Quota</h2>
          <p className="mt-2 text-3xl font-bold">45</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Create User</h2>
        <div className="mt-4 bg-white rounded-lg shadow-md p-6">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-indigo-600 rounded-md"
              >
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResellerDashboard;
