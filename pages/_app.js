import Layout from "../container/Layout";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  
  
  return (
    <>
   
       <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-S8FL79MPRH"}
      />

      <Script strategy="lazyOnload" id="my-script" >
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-S8FL79MPRH');
                `}
      </Script>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
