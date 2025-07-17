import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';

const Servers = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        const res = await axios.get('/api/servers', config);
        setServers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchServers();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Servers</h1>
      <div className="mt-6">
        <button className="px-4 py-2 text-white bg-indigo-600 rounded-md">
          Add Server
        </button>
      </div>
      <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
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
            {servers.map((server) => (
              <tr key={server._id}>
                <td className="px-6 py-4 whitespace-nowrap">{server.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{server.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      server.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {server.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default Servers;
