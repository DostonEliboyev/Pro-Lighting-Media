import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Header />
     
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
