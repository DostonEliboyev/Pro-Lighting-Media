import Layout from "../container/Layout";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
//   <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-EVQ4HRDNTP"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-EVQ4HRDNTP');
// </script>

  return (
    <>
   
       <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-EVQ4HRDNTP"}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-EVQ4HRDNTP');
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
