// import App from "next/app";
import React  from 'react'
import { AppContext, AppProps /*, AppContext */ } from 'next/app'
import App from 'next/app'
import { wrapper } from '../store/store'


const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext)),
})

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default wrapper.withRedux(MyApp)
