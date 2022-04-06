/* eslint-disable jsx-a11y/alt-text */
import styles from "./gridImage.module.css";
import YoutubeVideo from './../youtube/index';

const ImageGr = ({ count, images }) => {

  return (
    <div>
      <div className={styles.parent1}>
        <div className={`${styles.div1} ${styles.img}`}>
          <YoutubeVideo width={"100%"} height1={"540px"}/>
        </div>
        <div className={`${styles.div2} ${styles.img}`}> </div>
        <div className={`${styles.div3} ${styles.img}`}> </div>
        <div className={`${styles.div4} ${styles.img}`}> </div>
        <div className={`${styles.div5} ${styles.img}`}> </div>
        <div className={`${styles.div6} ${styles.img}`}> </div>
        <div className={`${styles.div7} ${styles.img}`}> </div>
        <div className={`${styles.div8} ${styles.img}`}> </div>
        <div className={`${styles.div9} ${styles.img}`}> </div>
        <div className={`${styles.div10} ${styles.img}`}> </div>
        <div className={`${styles.div11} ${styles.img}`}> </div>
      </div>
    </div>
  );
};

export default ImageGr;
