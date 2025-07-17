import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';

const Settings = () => {
  const [settings, setSettings] = useState({
    logo: '',
    rules: '',
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get('/api/settings');
        setSettings(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSettings();
  }, []);

  const onChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };
      await axios.post('/api/settings', settings, config);
      // TODO: show success message
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="logo" className="text-sm font-medium text-gray-700">
              Logo URL
            </label>
            <input
              type="text"
              id="logo"
              name="logo"
              value={settings.logo}
              onChange={onChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="rules"
              className="text-sm font-medium text-gray-700"
            >
              Rules
            </label>
            <textarea
              id="rules"
              name="rules"
              rows="4"
              value={settings.rules}
              onChange={onChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Settings;
