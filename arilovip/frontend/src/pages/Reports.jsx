import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';

const Reports = () => {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        const usersRes = await axios.get('/api/reports/users', config);
        const paymentsRes = await axios.get('/api/reports/payments', config);
        setUsers(usersRes.data);
        setPayments(paymentsRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReports();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Reports</h1>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Users Report</h2>
        <div className="mt-4 overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full">
            {/* ... table head ... */}
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  {/* ... table cells ... */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Payments Report</h2>
        <div className="mt-4 overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full">
            {/* ... table head ... */}
            <tbody>
              {payments.map((payment) => (
                <tr key={payment._id}>
                  {/* ... table cells ... */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reports;
