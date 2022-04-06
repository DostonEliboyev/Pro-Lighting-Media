import ourwork from "../asset/img/our-work.png";
import HomeBgImage from "../container/HomeBgImage";
import styles from "../styles/Work.module.css";
import ImageGr from "../components/GridImage/index";
import ContactUs from "./../components/form/form";
import OurPartner from "./../components/ourPartner/index";

function Work() {
  return (
    <div className={styles.containerBig}>
      <HomeBgImage image={ourwork} />
      <div className={styles.contianer}>
        <section className={styles.TitlePage}></section>
        <section className={styles.contianerGrid}>
          <ImageGr />
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
