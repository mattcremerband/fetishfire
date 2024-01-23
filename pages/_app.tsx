import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import '../pages/globals.css';
import { NextPageWithLayout } from './page';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <div className={montserrat.className}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <GoogleReCaptchaProvider
          reCaptchaKey={
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? 'NOT DEFINED'
          }
          scriptProps={{
            async: false,
            defer: true,
            appendTo: 'body',
            nonce: undefined,
          }}
        >
          <Notifications />
          <Component {...pageProps} />
        </GoogleReCaptchaProvider>
        <Analytics />
      </MantineProvider>
    </div>
  );
}

export default MyApp;
