import React from 'react';
import { useTranslation } from 'react-i18next';

const MainLayout = ({ children }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 text-2xl font-bold">AriloVIP</div>
        <nav className="mt-10">
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Dashboard
          </a>
          <a
            href="/users"
            className="block px-4 py-2 mt-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Users
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Settings
          </a>
        </nav>
      </div>
      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <div>
            <button onClick={() => changeLanguage('en')} className="mr-2">EN</button>
            <button onClick={() => changeLanguage('fa')}>FA</button>
          </div>
          <div>
            <button className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md">
              Logout
            </button>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
