import our_work from "../asset/img/our-work.png";
import HomeBgImage from "../container/HomeBgImage";
import styles from "../styles/Contact.module.css";
import ContactUs from "./../components/form/form";
import OurPartner from "./../components/ourPartner/index";

function Contact() {
  return (
    <div className={styles.containerBig}>
      <HomeBgImage image={our_work} />
      <div className={styles.contianer}>
        <section className={styles.TitlePage}></section>
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
export default Contact;
