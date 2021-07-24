import type { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeProvider from '../styles/ThemeProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Head>
        <title>Aakash Maurya</title>
        <meta name='description' content='Digital portfolio of Aakash Maurya' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
