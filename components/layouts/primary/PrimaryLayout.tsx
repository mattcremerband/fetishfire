import { AppShell, useMantineTheme } from '@mantine/core';
import Head from 'next/head';
import FetishHeader from '../../navigation/fetishheader/FetishHeader';
import Footer from '../../navigation/footer/Footer';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <>
      <Head>
        <title>Fitness Fetish</title>
      </Head>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],

            padding: 0,
            minHeight: 'calc(100vh - 110px)',
          },
        }}
        header={<FetishHeader />}
        footer={<Footer />}
      >
        <main className="mt-[110px] min-h-fit">{children}</main>
      </AppShell>
    </>
  );
};

export default PrimaryLayout;
