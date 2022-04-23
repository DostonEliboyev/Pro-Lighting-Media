import our_work from "../asset/img/bg/work.png";
import HomeBgImage from "../container/HomeBgImage";
import styles from "../styles/Contact.module.css";
import ContactUs from "../components/form/form";
import OurPartner from "./../components/ourPartner/index";
import ProCircleGold from "../components/proCircleGold/index";

function Contact() {
  return (
    <div className={styles.containerBig}>
      <HomeBgImage image={our_work} />
      <div className={styles.contianer}>
        <section className={styles.allAbout}>
          <div className={styles.allAboutCenter}>
            <div>
              <p>Home / Our Team</p>
              <span>ALL ABOUT LIGHTS - ITS ALL jasoasxn</span>
            </div>
          </div>
        </section>

        <section>
          <div className="ProContianer">
            <ProCircleGold Gtop="0" Gright="-130" />

            <ContactUs />
          </div>
        </section>
        <section className={styles.ourPart}>
          <OurPartner />
        </section>
      </div>
    </div>
  );
}
export default Contact;
