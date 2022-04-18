import Image from "next/image";
import styles from "./square.module.css";
import diskotik2 from "../../asset/img/team/woman2.png";
import ProCircleGold from "../proCircleGold/index";
import ProCircleWhite from "./../proCircleWhite/index";

export default function SquareForty() {
  return (
    <div className={styles.con_wrapp}>
      <div className="ProContianer">
        <ProCircleGold Gbottom="50" Wright="0" Wtop="0" />
        <ProCircleWhite Gtop="0" Wright="0" />
      </div>
      <div className={styles.con_wrapp_body}>
        <div className={styles.wrapper}>
          <div className={styles.card__item}>
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>

          <div
            className={`${styles.card__item} ${styles.card__item_border_top}`}
          >
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>

          <div className={styles.card__item}>
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>
        </div>
        <div className={styles.wrapper2}>
          <div
            className={`${styles.card__item} ${styles.card__item_border_left}`}
          >
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>

          <div className={styles.card__item}>
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>

          <div className={styles.card__item}>
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>

          <div
            className={`${styles.card__item} ${styles.card__item_border_right}`}
          >
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>
        </div>
        <div className={styles.wrapper3}>
          <div className={styles.card__item}>
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>

          <div
            className={`${styles.card__item} ${styles.card__item_border_bottom}`}
          >
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>

          <div className={styles.card__item}>
            <div>
              <Image alt="" src={diskotik2} />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.btnSubmit}>Now Submit</button>
    </div>
  );
}
