import React from 'react';
import MainLayout from '../layout/MainLayout';

const Notifications = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Send Notification</h1>
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="user"
              className="text-sm font-medium text-gray-700"
            >
              User (optional, leave blank for all)
            </label>
            <input
              type="text"
              id="user"
              name="user"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md"
            >
              Send Notification
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Notifications;
