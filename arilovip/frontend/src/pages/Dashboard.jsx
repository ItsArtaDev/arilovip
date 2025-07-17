import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">{t('dashboard')}</h1>
      <motion.div
        className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.div
          className="p-6 bg-white rounded-xl shadow-lg"
          variants={cardVariants}
        >
          <h2 className="text-lg font-medium">{t('total_users')}</h2>
          <p className="mt-2 text-3xl font-bold">{stats.totalUsers}</p>
        </motion.div>
        <motion.div
          className="p-6 bg-white rounded-xl shadow-lg"
          variants={cardVariants}
        >
          <h2 className="text-lg font-medium">{t('online_users')}</h2>
          <p className="mt-2 text-3xl font-bold">{stats.onlineUsers}</p>
        </motion.div>
        <motion.div
          className="p-6 bg-white rounded-xl shadow-lg"
          variants={cardVariants}
        >
          <h2 className="text-lg font-medium">{t('total_traffic')}</h2>
          <p className="mt-2 text-3xl font-bold">{stats.totalTraffic} TB</p>
        </motion.div>
        <motion.div
          className="p-6 bg-white rounded-xl shadow-lg"
          variants={cardVariants}
        >
          <h2 className="text-lg font-medium">{t('revenue')}</h2>
          <p className="mt-2 text-3xl font-bold">${stats.revenue}</p>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default Dashboard;
