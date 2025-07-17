import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to AriloVIP",
          "dashboard": "Dashboard",
          "total_users": "Total Users",
          "online_users": "Online Users",
          "total_traffic": "Total Traffic",
          "revenue": "Revenue"
        }
      },
      fa: {
        translation: {
          "welcome": "به آریلو وی‌آی‌پی خوش آمدید",
          "dashboard": "داشبورد",
          "total_users": "تعداد کل کاربران",
          "online_users": "کاربران آنلاین",
          "total_traffic": "ترافیک کل",
          "revenue": "درآمد"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
