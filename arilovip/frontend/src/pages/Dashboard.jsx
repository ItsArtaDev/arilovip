import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layout/MainLayout';

const Dashboard = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    totalUsers: 0,
    onlineUsers: 0,
    totalTraffic: 0,
    revenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('/api/dashboard/stats');
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">{t('dashboard')}</h1>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">{t('total_users')}</h2>
          <p className="mt-2 text-3xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">{t('online_users')}</h2>
          <p className="mt-2 text-3xl font-bold">{stats.onlineUsers}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">{t('total_traffic')}</h2>
          <p className="mt-2 text-3xl font-bold">{stats.totalTraffic} TB</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium">{t('revenue')}</h2>
          <p className="mt-2 text-3xl font-bold">${stats.revenue}</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
