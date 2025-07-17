import React from 'react';
import MainLayout from '../layout/MainLayout';

const Users = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="mt-6">
        <button className="px-4 py-2 text-white bg-indigo-600 rounded-md">
          Add User
        </button>
      </div>
      <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Example Row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">testuser</td>
              <td className="px-6 py-4 whitespace-nowrap">User</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
                <a href="#" className="ml-4 text-red-600 hover:text-red-900">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default Users;
