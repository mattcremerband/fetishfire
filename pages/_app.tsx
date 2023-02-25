import type { AppProps } from 'next/app';
import '../pages/globals.css';
import { NextPageWithLayout } from './page';
import { MantineProvider } from '@mantine/core';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
      <Component {...pageProps} />
    </MantineProvider>
  );

}

export default MyApp;
