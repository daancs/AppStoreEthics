import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
      <Head>
        <title>App Store Ethics: The Game</title>
        <meta name="description" content="A tool for teaching ethics in the form of an App Store Employee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
)}
