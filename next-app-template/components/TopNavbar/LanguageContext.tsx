// // LanguageContext.js
// "use client";

// import { createContext, useContext, useEffect, useState } from 'react';

// const LanguageContext = createContext();

// export function LanguageProvider({ children }) {
//   const [currentLanguage, setCurrentLanguage] = useState(() => {
//     // Check if localStorage is available (client-side)
//     if (typeof window !== 'undefined') {
//       const storedLanguage = localStorage.getItem('currentLanguage');
//       return storedLanguage || 'kiny';
//     }

//     // Default to 'kiny' for server-side rendering
//     return 'kiny';
//   });

//   const changeLanguage = (language) => {
//     setCurrentLanguage(language);
//   };

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('currentLanguage', currentLanguage);
//     }
//   }, [currentLanguage]);

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, changeLanguage }} >
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   return useContext(LanguageContext);
// }

// LanguageContext.js
// "use client";

// import { createContext, useContext, useEffect, useState } from 'react';

// const LanguageContext = createContext();

// export function LanguageProvider({ children }) {
//   const [currentLanguage, setCurrentLanguage] = useState(() => {
//     // Check if cookies are available (client-side)
//     if (typeof document !== 'undefined') {
//       const storedLanguage = getCookie('currentLanguage');
//       return storedLanguage || 'kiny';
//     }

//     // Default to 'kiny' for server-side rendering
//     return 'kiny';
//   });

//   const changeLanguage = (language) => {
//     setCurrentLanguage(language);
//     // Update cookie with new language
//     setCookie('currentLanguage', language, 365); // Expires in 365 days
//   };

//   useEffect(() => {
//     // Update cookie whenever language changes
//     setCookie('currentLanguage', currentLanguage, 365); // Expires in 365 days
//   }, [currentLanguage]);

//   // Helper function to get cookie value
//   const getCookie = (name) => {
//     const cookieString = document.cookie;
//     const cookies = cookieString.split('; ');
//     for (let cookie of cookies) {
//       const [cookieName, cookieValue] = cookie.split('=');
//       if (cookieName === name) {
//         return decodeURIComponent(cookieValue);
//       }
//     }
//     return null;
//   };

//   // Helper function to set cookie value
//   const setCookie = (name, value, days) => {
//     const expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + days);
//     const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
//     document.cookie = name + '=' + cookieValue;
//   };

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, changeLanguage }} >
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   return useContext(LanguageContext);
// }

// // LanguageContext.js
// "use client";

// import { createContext, useContext, useEffect, useState } from 'react';

// const LanguageContext = createContext();

// // Helper function to get cookie value
// const getCookie = (name) => {
//   const cookieString = document.cookie;
//   const cookies = cookieString.split('; ');
//   for (let cookie of cookies) {
//     const [cookieName, cookieValue] = cookie.split('=');
//     if (cookieName === name) {
//       return decodeURIComponent(cookieValue);
//     }
//   }
//   return null;
// };

// // Helper function to set cookie value
// const setCookie = (name, value, days) => {
//   const expirationDate = new Date();
//   expirationDate.setDate(expirationDate.getDate() + days);
//   const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
//   document.cookie = name + '=' + cookieValue;
// };

// export function LanguageProvider({ children }) {
//   const [currentLanguage, setCurrentLanguage] = useState(() => {
//     // Check if cookies are available (client-side)
//     if (typeof document !== 'undefined') {
//       const storedLanguage = getCookie('currentLanguage');
//       return storedLanguage || 'kiny';
//     }

//     // Default to 'kiny' for server-side rendering
//     return 'kiny';
//   });

//   const changeLanguage = (language) => {
//     setCurrentLanguage(language);
//     // Update cookie with new language
//     setCookie('currentLanguage', language, 365); // Expires in 365 days
//   };

//   useEffect(() => {
//     // Update cookie whenever language changes
//     setCookie('currentLanguage', currentLanguage, 365); // Expires in 365 days
//   }, [currentLanguage]);

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, changeLanguage }} >
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   return useContext(LanguageContext);
// }

// LanguageContext.js
"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import {Loaders} from './Loader';
const LanguageContext = createContext();

// Helper function to get cookie value
const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};

// Helper function to set cookie value
const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
  document.cookie = name + '=' + cookieValue;
};

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Check if cookies are available (client-side)
    if (typeof document !== 'undefined') {
      const storedLanguage = getCookie('currentLanguage');
      return storedLanguage || 'kiny';
    }

    // Default to 'kiny' for server-side rendering
    return 'kiny';
  });
  const [loading, setLoading] = useState(true); // Loading state

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    setCookie('currentLanguage', language, 365); // Expires in 365 days
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 800); // Adjust the delay time as needed
  }, []);

  useEffect(() => {
    if (!loading) {
      setCookie('currentLanguage', currentLanguage, 365); // Update cookie after loading is complete
    }
  }, [currentLanguage, loading]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {loading ? <Loaders/> : children} {/* Conditional rendering */}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// // LanguageContext.js
// "use client";

// import { createContext, useContext, useEffect, useState } from 'react';

// const LanguageContext = createContext();

// // Helper function to get cookie value
// const getCookie = (name) => {
//   const cookieString = document.cookie;
//   const cookies = cookieString.split('; ');
//   for (let cookie of cookies) {
//     const [cookieName, cookieValue] = cookie.split('=');
//     if (cookieName === name) {
//       return decodeURIComponent(cookieValue);
//     }
//   }
//   return null;
// };

// // Helper function to set cookie value
// const setCookie = (name, value, days) => {
//   const expirationDate = new Date();
//   expirationDate.setDate(expirationDate.getDate() + days);
//   const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
//   document.cookie = name + '=' + cookieValue;
// };

// export function LanguageProvider({ children }) {
//   const [currentLanguage, setCurrentLanguage] = useState(() => {
//     // Check if cookies are available (client-side)
//     if (typeof document !== 'undefined') {
//       const storedLanguage = getCookie('currentLanguage');
//       return storedLanguage || 'kiny';
//     }

//     // Default to 'kiny' for server-side rendering
//     return 'kiny';
//   });
//   const [loading, setLoading] = useState(true); // Loading state
//   const [showCookiePopup, setShowCookiePopup] = useState(false); // State to control cookie popup visibility

//   const changeLanguage = (language) => {
//     setCurrentLanguage(language);
//     setCookie('currentLanguage', language, 365); // Expires in 365 days
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false); // Set loading to false after a delay
//       // Show cookie popup after loading
//       setShowCookiePopup(true);
//     }, 1000); // Adjust the delay time as needed
//   }, []);

//   useEffect(() => {
//     if (!loading && showCookiePopup) {
//       // Update cookie only after user confirmation
//       const confirmation = window.confirm('This website uses cookies. Click OK to accept.');
//       if (confirmation) {
//         setCookie('currentLanguage', currentLanguage, 365); // Update cookie after user confirmation
//       }
//       // Hide cookie popup after user confirmation
//       setShowCookiePopup(false);
//     }
//   }, [currentLanguage, loading, showCookiePopup]);

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
//       {/* {showCookiePopup && (
//         <div className="cookie-popup">
//           <p>This website uses cookies.</p>
//           <button onClick={() => setShowCookiePopup(false)}>OK</button>
//         </div>
//       )} */}
//       {loading ? <p>Loading...</p> : children} {/* Conditional rendering */}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   return useContext(LanguageContext);
// }
