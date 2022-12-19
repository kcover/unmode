import '../styles/globals.css';
import '../styles/Clock.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {

  return (<main>
    <CssBaseline />
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" key="material-meta"/>
    </Head>
    <Component {...pageProps} />
    </main>);
}
