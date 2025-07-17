import React from 'react';
import MainLayout from '../layout/MainLayout';

const Profile = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold">Change Password</h2>
        <form className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="currentPassword"
              className="text-sm font-medium text-gray-700"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Profile;
