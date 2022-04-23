import Image from "next/image";
import styles from "./square.module.css";
import Frame1 from "/public/ourwork/Frame1.png";
import Frame2 from "/public/ourwork/Frame2.png";
import Frame3 from "/public/ourwork/Frame3.png";
import Frame4 from "/public/ourwork/Frame4.png";
import Frame5 from "/public/ourwork/Frame5.png";
import Frame6 from "/public/ourwork/Frame6.png";
import Frame7 from "/public/ourwork/Frame7.png";
import Frame8 from "/public/ourwork/Frame8.png";
import Frame10 from "/public/ourwork/Frame10.png";
import Frame11 from "/public/ourwork/Frame11.png";
import ProCircleGold from "../proCircleGold/index";
import ProCircleWhite from "./../proCircleWhite/index";

export default function SquareForty() {
  return (
    <div className={styles.con_wrapp}>
    
      <div className={styles.con_wrapp_body}>
        <ProCircleGold Gbottom="50" Wright="0" Wtop="0" />
        <ProCircleWhite Gtop="0" Wright="0" />
        <div className={styles.wrapper}>
          <div className={styles.card__item}>
            <div>
              <Image alt="" src={Frame1} />
            </div>
          </div>

          <div
            className={`${styles.card__item} ${styles.card__item_border_top}`}
          >
            <div>
              <Image alt="" src={Frame2} />
            </div>
          </div>

          <div className={styles.card__item}>
            <div>
              <Image alt="" src={Frame3} />
            </div>
          </div>
        </div>
        <div className={styles.wrapper2}>
          <div
            className={`${styles.card__item} ${styles.card__item_border_left}`}
          >
            <div>
              <Image alt="" src={Frame4} />
            </div>
          </div>

          <div className={styles.card__item}>
            <div>
              <Image alt="" src={Frame5} />
            </div>
          </div>

          <div className={styles.card__item}>
            <div>
              <Image alt="" src={Frame6} />
            </div>
          </div>

          <div
            className={`${styles.card__item} ${styles.card__item_border_right}`}
          >
            <div>
              <Image alt="" src={Frame7} />
            </div>
          </div>
        </div>
        <div className={styles.wrapper3}>
          <div className={styles.card__item}>
            <div>
              <Image alt="" src={Frame8} />
            </div>
          </div>

          <div
            className={`${styles.card__item} ${styles.card__item_border_bottom}`}
          >
            <div>
              <Image alt="" src={Frame11} />
            </div>
          </div>

          <div className={styles.card__item}>
            <div>
              <Image alt="" src={Frame10} />
            </div>
          </div>
        </div>

      </div>
      <button className={styles.btnSubmit}>Now Submit</button>
    </div>
  );
}
