import '@mantine/core/styles.css';

// import React from 'react';
// import { MantineProvider, ColorSchemeScript } from '@mantine/core';
// import { theme } from '../theme';
// import { LanguageProvider } from '../components/TopNavbar/LanguageContext';

// export const metadata = {
//   title: 'Mantine Next.js template',
//   description: 'I am using Mantine with Next.js!',
// };

// export default function RootLayout({ children }: { children: any }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <ColorSchemeScript />
//         <link rel="shortcut icon" href="/favicon.svg" />
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
//         />
//       </head>
//       <body>
//         <MantineProvider theme={theme}>
//           <LanguageProvider>
//           {children}
//           </LanguageProvider>
//         </MantineProvider>
//       </body>
//     </html>
//   );
// }

import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { LanguageProvider } from '../components/TopNavbar/LanguageContext';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  try {
    return (
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </MantineProvider>
        </body>
      </html>
    );
  } catch (error) {
    // Log the error if needed
    console.error('Error in RootLayout:', error);
    // Return null or a fallback component
    return null;
  }
}
