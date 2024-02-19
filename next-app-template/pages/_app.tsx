import '@mantine/core/styles.css';

import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { LanguageProvider } from '../components/TopNavbar/LanguageContext';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (

        <MantineProvider theme={theme}>
          <LanguageProvider>
          <Component {...pageProps} />
          </LanguageProvider>
        </MantineProvider>
  );
}
