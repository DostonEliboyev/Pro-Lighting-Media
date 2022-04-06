import styles from "./index.module.css";
import CardPade from "./../cardPade/index";
import OrderNow from "../../buttons/index";
function RectangleCard() {
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
  ];
  return (
    <section className={styles.contianer}>
      <div className={styles.wrapper__title}>
        <div>
          <p>A little</p>
          <h1 className="whiteYellowTittle">
            <span>Our</span> Team
          </h1>
        </div>
        <OrderNow name={"View all"} href={"/rent"} />
      </div>
      <div className={styles.wrapper}>
        {data.map((item, index) => (
          <CardPade key={index} item={item} />
          
        ))}
      </div>
    </section>
  );
}
export default RectangleCard;
