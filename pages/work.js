import ourwork from "../asset/img/bg/work.png";
import HomeBgImage from "../container/HomeBgImage";
import styles from "../styles/Work.module.css";
import ImageGr from "../components/GridImage/index";
import ContactUs from "./../components/form/form";
import OurPartner from "./../components/ourPartner/index";
import ProCircleGold from "../components/proCircleGold/index";
import ProCircleWhite from "../components/proCircleWhite/index";

function Work() {
  return (
    <div className={styles.containerBig}>
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

            <ImageGr />
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
export default Work;
