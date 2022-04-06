import Ourwork from "../asset/img/our-work.png";
import HomeBgImage from "../container/HomeBgImage";
import ContactUs from "./../components/form/form";
import OurPartner from "./../components/ourPartner/index";
import styles from "../styles/Team.module.css";
import CardPade from "../components/cards/cardPade/index";
function Team() {
  const data = [
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem1",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem2",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem3",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem4",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem1",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem2",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem3",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem4",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem1",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem2",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem3",
    },
    {
      name: "Kamol Abdullayev",
      level: "Ijrochi direktori",
      img: "Tem4",
    },
  ];

  return (
    <div className={styles.containerBig}>
      <HomeBgImage image={Ourwork} />
      <div className={styles.contianer}>
        <section className={styles.TitlePage}></section>
        <section className={styles.contianerGrid}>
          {data.map((item, index) => (
            <CardPade key={index} item={item} />
          ))}
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
export default Team;
