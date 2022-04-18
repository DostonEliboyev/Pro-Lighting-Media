import Ourwork from "../asset/img/bg/rent.png";
import HomeBgImage from "../container/HomeBgImage";
import ContactUs from "./../components/form/form";
import OurPartner from "./../components/ourPartner/index";
import styles from "../styles/Team.module.css";
import CardPade from "../components/cards/cardPade/index";
import ProCircleGold from "../components/proCircleGold/index";
import {teamFull} from "../components/cards/cardPade/data"
function Team() {
  

  return (
    <div className={styles.containerBig}>
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
            <CardPade team={teamFull} />
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
