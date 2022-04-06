import Image from "next/image";
import diskotik from "../asset/img/diskotik.png";
import diskotik2 from "../asset/img/diskotik2.png";
import ellios44 from "../asset/img/Ellipse/Ellipsbg44.png";
import styles from "../styles/Home.module.css";
import ContactUs from "../components/form/form";
import RectangleCard from "../components/cards/RectangleCard";
import HomeBgImage from "../container/HomeBgImage";
import SimpleSlider from "../components/cards/SlideCard/index";
import HomeBacImage from "../asset/img/Home_bg.png";
import SquareForty from "./../components/squareFortyFive/index";
import OurPartner from './../components/ourPartner/index';

export default function Home() {
  
  return (
    <section className={styles.containerBig}>
      <HomeBgImage image={HomeBacImage} />
      <section className={styles.container}>
        <section className={styles.allAbout}>
          <div className={styles.allAboutCenter}>
            <span>ALL ABOUT LIGHTS - ITS ALL HERE</span>
            <p>Turn on the feeling with all music event </p>
            <button>Now Submit</button>
          </div>
        </section>

        <section className={styles.outTeam}>
          <div className={styles.ellipse44}>
            <Image src={ellios44} alt=""/>
          </div>

          <div className={styles.outTeamLeft}>
            <p className={styles.outTeamTitel}>
              lets talk a little <span>About ours</span>
            </p>
            <div className={styles.leftBottomImg}>
              <Image src={diskotik2} alt="" />
            </div>
            <div className={styles.topRightImg}>
              <Image src={diskotik} alt=""/>
              <p className={styles.topRightTitle}>companies</p>
            </div>
          </div>

          <div className={styles.outTeamRigth}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              ornare posuere neque, ac nunc sollicitudin. Diam bibendum auctor
              odio scelerisque ridiculus. Tincidunt amet aliquet elementum enim
              turpis sed purus venenatis sed. Aliquam vulputate feugiat lobortis
              cursus sit proin adipiscing massa, montes. In nisl rhoncus amet
              sollicitudin ultrices. A, viverra dignissim ac, tempus.
            </p>
            <p>
              Nibh nunc, orci, vel orci eu pharetra, dictumst amet. Massa a ac
              semper imperdiet faucibus magna faucibus. Aliquam accumsan, urna,
              nisl venenatis, fames. Eget hendrerit interdum rutrum nulla id.
            </p>
          </div>
        </section>
        <section className={styles.someWork}>
          <div>
            <p className={styles.HeadTitLetter}>some work</p>
            <h1 className="whiteYellowTittle">
              <span>REMOVED</span> we have
            </h1>
          </div>

          {/**/}
          <SquareForty />

          {/**/}
        </section>
        <SimpleSlider />
        <RectangleCard />

        <ContactUs />

        <OurPartner/>
        
      </section>
    </section>
  );
}
