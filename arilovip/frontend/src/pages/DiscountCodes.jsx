import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';

const DiscountCodes = () => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        const res = await axios.get('/api/discount-codes', config);
        setCodes(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCodes();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Discount Codes</h1>
      <div className="mt-6">
        <button className="px-4 py-2 text-white bg-indigo-600 rounded-md">
          Add Code
        </button>
      </div>
      <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Percentage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expiry Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usage
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {codes.map((code) => (
              <tr key={code._id}>
                <td className="px-6 py-4 whitespace-nowrap">{code.code}</td>
                <td className="px-6 py-4 whitespace-nowrap">{code.percentage}%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(code.expiryDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {code.usageCount} / {code.usageLimit}
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

export default DiscountCodes;
