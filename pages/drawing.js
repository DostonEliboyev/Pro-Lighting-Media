import { useRouter } from "next/router";
import ourwork from "../asset/img/bg/work.png";
import Head from "next/head";
import HomeBgImage from "../container/HomeBgImage";
import styles from "../styles/Work.module.css";
import IGrid from "../components/GridImage/GirdImage2";
import ContactUs from "../components/form/form";
import OurPartner from "../components/ourPartner/index";
import ProCircleGold from "../components/proCircleGold/index";

import onehero from "../public/lang/onehero.json";
function Drawing() {
  const { locale, locales, asPath } = useRouter()
  return (
    <div className={styles.containerBig}>
      {onehero.about
        .filter((p) => p.locale === locale)
        .map((blogPost, i) => {
          return (
            <Head key={i}>
              <title>{blogPost.h1}</title>
              <meta name="description" content={`width=device-width, initial-${blogPost.h1}`} />
              <meta property="og:title" content={`Learn more about ${blogPost.h4}`} />
              <meta property="og:description" content={`${blogPost.h4}`} />
              <meta property="og:url" content="https://www.plm.uz/" />
              <meta property="og:type" content="website" />
              {/* <link ref="icon" href="/favicon.ico /" /> */}
            </Head>
          );
        })}
      <HomeBgImage image={ourwork} />
      <div className={styles.contianer}>
        <section className={styles.allAbout}>
          <div className={styles.allAboutCenter}>
            <div>
              <p>Home/Our Team</p>
              <span>ALL ABOUT LIGHTS - ITS ALL</span>
            </div>

            <button>Now Submit</button>
          </div>
        </section>

        <section className={styles.contianerGrid}>
          <div className="ProContianer">
            <ProCircleGold Gright="-85" Gtop="0" />
            <ProCircleGold Gbottom="50" Gleft="-80" />
            <IGrid />
          </div>
        </section>
        <section>
          <ContactUs />
        </section>
        <section className={styles.ourPart}>
          <OurPartner />
        </section>
      </div>
    </div>
  );
}
export default Drawing;
