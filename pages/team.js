import Ourwork from "../asset/img/bg/rent.png";
import { useRouter } from "next/router";
import Head from "next/head";
import HomeBgImage from "../container/HomeBgImage";
import ContactUs from "./../components/form/form";
import OurPartner from "./../components/ourPartner/index";
import styles from "../styles/Team.module.css";
import CardPade from "../components/cards/cardPade/index";
import ProCircleGold from "../components/proCircleGold/index";
import TeamFull from "../public/lang/team.json"
import onehero from "../public/lang/onehero.json";
function Team() {
  const { locale, locales, asPath } = useRouter()

  return (
    <div className={styles.containerBig}>
      {onehero.about
        .filter((p) => p.locale === locale)
        .map((blogPost, i) => {
          return (
            <Head>
              <title>{blogPost.h1}</title>
              <meta name="description" content={`width=device-width, initial-${blogPost.h1}`} />
              <meta property="og:title" content={`Learn more about ${blogPost.h4}`} />
              <meta property="og:description" content={`${blogPost.h4}`} />
              <meta property="og:url" content="https://www.plm.uz/" />
              <meta property="og:type" content="website" />
              <link ref="icon" href="/favicon.ico" />
            </Head>
          );
        })}
      <HomeBgImage image={Ourwork} />

      <div className={styles.contianer}>
        <section className={styles.allAbout}>
          <div className={styles.allAboutCenter}>
            <div>
              <p>Home / Our Team</p>
              <span>ALL ABOUT LIGHTS - ITS ALL jasoasxn</span>
            </div>
          </div>
        </section>

        <div className="ProContianer">
          <section className={styles.contianerGrid}>
            <ProCircleGold Gtop="-12" Gright="30" />
            <ProCircleGold Gbottom="50" Gleft="30" />
            <CardPade team={TeamFull.Fullteam} />
          </section>
        </div>
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
export default Team;
