import type { AppProps } from 'next/app'
import ThemeProvider from '../styles/ThemeProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
