/* eslint-disable react/jsx-key */
import Image from "next/image";
import styles from "./index.module.css";


function CardPade({ team }) {
  return (
    <div className={styles.bigContainer}>
      {team.map((item) => (
        <div className={styles.continer}>
          <div className={styles.ImageBor}>
            <div className={styles.imagecontainer}>
              <Image
                src={item.src}
                alt=""
                className={styles.imageDeg}
                width={item.width}
                height={item.height}
                layout="fill"
              />
            </div>
          </div>
          <h1> {item.FullName} </h1>
          <p>{item.job}</p>
        </div>
      ))}

    </div>
  );
}
export default CardPade;
