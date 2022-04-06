import Image from "next/image";
import person from "../../../asset/img/team/Temp1.jpg";
import styles from "./index.module.css";
function CardPade({item}) {

  return (
    <div className={styles.bigContainer}>
      <div className={styles.continer}>
        <div className={styles.ImageBor}>
          <div className={styles.imagecontainer}>
            <Image
              src={person}
              alt=""
              className={styles.imageDeg}
              width="300px"
              height="300px"
            />
          </div>
        </div>
        <h1> {item.name}</h1>
        <p>{ item.level}</p>
      </div>
    </div>
  );
}
export default CardPade;
