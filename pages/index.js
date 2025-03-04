import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import diskotik from "../asset/img/diskotik.png";
import diskotik2 from "../asset/img/diskotik2.png";
import styles from "../styles/Home.module.css";
import ContactUs from "../components/form/form";
import RectangleCard from "../components/cards/RectangleCard";
import HomeBgImage from "../container/HomeBgImage";
import SimpleSlider from "../components/cards/SlideCard/index";
import HomeBacImage from "../asset/img/Home_bg.png";
import OurPartner from "./../components/ourPartner/index";
import ProCircleGold from "../components/proCircleGold/index";
import onehero from "../public/lang/onehero.json";
import Company from "../components/company";
export default function Home() {
  const { locale, locales, asPath } = useRouter();
  return (

    <section className={styles.containerBig}>
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
              <link rel="icon" href="/favicon.ico /" />
            </Head>
          );
        })}

      <HomeBgImage image={HomeBacImage} />

      <section className={styles.container}>

        <section className={styles.allAbout} >

          {onehero.about
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <div className={styles.allAboutCenter} key={i}>
                  <span>{blogPost.h1}</span>
                  <p>{blogPost.h4} </p>
                  <Link href={"/contact"}>
                    <button>{blogPost.button}</button>
                  </Link>
                </div>
              );
            })}

        </section>

        <section className={styles.outTeam}>
          {/* <div className={styles.ellipse44}>
            <Image src={ellios44} alt="" />
          </div> */}
          {onehero.about1
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <div className={styles.outTeamLeft} key={i}>
                  {/* <p className={styles.outTeamTitel}>
                    {blogPost.p}<span>{blogPost.h1}</span>
                  </p>
                  <p className={styles.topRightTitle}>{blogPost.h4}</p> */}

                  <div className={styles.outTeam__container}>
                    <div className={styles.leftBottomImg}>
                      <Image src={diskotik2} alt="" />
                    </div>
                    <div className={styles.topRightImg}>
                      <Image src={diskotik} alt="" />
                    </div>
                  </div>
                </div>
              )
            })}

          {onehero.aboutTitle
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <div className={styles.outTeamRigth} key={i}>

                  <p>
                    {blogPost.p}
                  </p>
                  <p>
                    {blogPost.p2}
                  </p>
                </div>
              )
            })}

        </section>
        {/* <section className={styles.someWork}>
          {onehero.about2
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <div key={i}>
                  <p className={styles.HeadTitLetter}>{blogPost.p}</p>
                  <h1 className="whiteYellowTittle">
                    <span>{blogPost.h1}</span> {blogPost.h4}
                  </h1>
                </div>

              );
            })}
          <SquareForty />
        </section> */}
        <section>
          <SimpleSlider />
        </section>
        <Company />
        <RectangleCard />
        <div className="ProContianer">
          <ProCircleGold Gtop="0" Gright="0" />
          <ContactUs />
        </div>

        <OurPartner />
      </section>
    </section>
  );
}
