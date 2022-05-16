import Image from "next/image";
import { useRouter } from "next/router";
import diskotik from "../asset/img/diskotik.png";
import diskotik2 from "../asset/img/diskotik2.png";
import Ellipse9 from "../asset/img/Ellipse/Ellipse9.png";
import ellios44 from "../asset/img/Ellipse/Ellipsbg44.png";
import styles from "../styles/Home.module.css";
import ContactUs from "../components/form/form";
import RectangleCard from "../components/cards/RectangleCard";
import HomeBgImage from "../container/HomeBgImage";
import SimpleSlider from "../components/cards/SlideCard/index";
import HomeBacImage from "../asset/img/Home_bg.png";
import SquareForty from "./../components/squareFortyFive/index";
import OurPartner from "./../components/ourPartner/index";
import ProCircleGold from "../components/proCircleGold/index";
import onehero from "../public/lang/onehero.json";
import Company from "../components/company";
export default function Home() {
  const { locale, locales, asPath } = useRouter();
  return (
    <section className={styles.containerBig}>
      <HomeBgImage image={HomeBacImage} />
      {/* <div className={styles.Ellipse9}>
        <Image src={Ellipse9}/>
      </div> */}
      <section className={styles.container}>
        <section className={styles.allAbout}>

          {onehero.about
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <div className={styles.allAboutCenter} key={i}>
                  <span>{blogPost.h1}</span>
                  <p>{blogPost.h4} </p>
                  <button>{blogPost.button}</button>
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
                  <p className={styles.outTeamTitel}>
                    {blogPost.p}<span>{blogPost.h1}</span>
                  </p>
                  <div className={styles.leftBottomImg}>
                    <Image src={diskotik2} alt="" />
                  </div>
                  <div className={styles.topRightImg}>
                    <Image src={diskotik} alt="" />
                    <p className={styles.topRightTitle}>{blogPost.h4}</p>
                  </div>
                </div>
              );
            })}


          <div className={styles.outTeamRigth}>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              ornare posuere neque, ac nunc sollicitudin. Diam bibendum auctor
              odio scelerisque ridiculus. Tincidunt amet aliquet elementum enim
              turpis sed purus venenatis sed. Aliquam vulputate feugiat lobortis
              cursus sit proin adipiscing massa,
            </p>
            <p>
              Nibh nunc, orci, vel orci eu pharetra, dictumst amet. Massa a ac
              semper imperdiet faucibus magna faucibus. Aliquam accumsan, urna,
              nisl venenatis, fames. Eget hendrerit interdum rutrum nulla id.
            </p>
          </div>
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
        <Company/>
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
