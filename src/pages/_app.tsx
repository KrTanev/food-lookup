import type { ReactElement, ReactNode } from 'react';
import { useRef } from 'react';

import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import '@/styles/globals.css';
import themeConfig from '@/styles/theme/themeConfig';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* <link rel="icon" href="/favicon.png" sizes="any" /> */}
        <title>Happy Paw</title>
      </Head>

      <ThemeProvider theme={themeConfig}>
        <CssBaseline />

        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MyApp;
