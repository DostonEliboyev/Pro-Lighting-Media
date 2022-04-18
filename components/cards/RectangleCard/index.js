import styles from "./index.module.css";
import CardPade from "./../cardPade/index";
import OrderNow from "../../buttons/index";
function RectangleCard() {
  const team4 = [
    {
      with: 400,
      height: 400,
      src: "/photos/man17.png",
      alt: " ",
      FullName: "Усмоний Мухаммад Диёр",
      job: "Художник по свету",
    },
    {
      with: 400,
      height: 400,
      src: "/photos/man1.png",
      alt: " ",
      FullName: "Шарипов Абдумумин",
      job:"Технический специалист по светодиодным экранам"
  },
    {
      with: 400,
      height: 400,
      src: "/photos/man5.png",
      alt: " ",
      FullName: "Сайдуллаев Ботир",
      job: "Инженер",
    },
    {
      with: 400,
      height: 400,
      src: "/photos/man2.png",
      alt: " ",
      FullName: "Инженер по свету",
      job:"Инженер по свету"
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
        <CardPade team={team4} />
      </div>
    </section>
  );
}
export default RectangleCard;
