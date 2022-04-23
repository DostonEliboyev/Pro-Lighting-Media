import styles from "./index.module.css";
import CardPade from "./../cardPade/index";
import OrderNow from "../../buttons/index";
import Boss from "../../../public/lang/team.json"
function RectangleCard() {
 
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
        <CardPade team={Boss.Bosses} />
      </div>
    </section>
  );
}
export default RectangleCard;
