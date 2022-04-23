/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import styles from "./gridImage.module.css";
import YoutubeEmbed from "../youtube/YoutubeEmbed";

import image from "../../public/drawing/image.jpg";
import image1 from "../../public/drawing/image1.jpg";
import image2 from "../../public/drawing/image2.jpg";
import image3 from "../../public/drawing/image3.jpg";
import image4 from "../../public/drawing/image4.jpg";
import image5 from "../../public/drawing/image5.jpg";
import image6 from "../../public/drawing/image6.jpg";
import image7 from "../../public/drawing/image7.jpg";
// import image8 from "../../public/drawing/image8.jpg";
// import image9 from "../../public/drawing/image9.jpg";
// import image10 from "../../public/drawing/image10.jpg";
// import image11 from "../../public/drawing/image11.jpg";
// import image12 from "../../public/drawing/image12.jpg";
// import image13 from "../../public/drawing/image13.jpg";
// import image14 from "../../public/drawing/image14.jpg";

const IGrid = () => {
  return (
    <div>
      <div className={styles.parent1}>
        <div className={`${styles.div1} ${styles.img}`}>
          <div className={styles.img__Child}>
            <Image
              alt=""
              src={image}
              className={styles.imgItem}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`${styles.div2} ${styles.img}`}>
          <div className={styles.imgChild}>
            <YoutubeEmbed embedId={"bPcIHYYFcp4"} />
          </div>
        </div>
        <div className={`${styles.div3} ${styles.img}`}>
          <div className={styles.img__Child}>
            <Image
              alt=""
              src={image1}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>

        <div className={`${styles.div4} ${styles.img}`}>
          <div className={styles.img__Child}>
            <Image
              alt=""
              src={image2}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`${styles.div5} ${styles.img}`}>
          <div className={styles.imgChild}>
            <YoutubeEmbed embedId={"X4F8UX-nvlM"} />
          </div>
        </div>

        <div className={`${styles.div6} ${styles.img}`}>
          <div className={styles.img__Child}>
            <Image
              alt=""
              src={image3}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`${styles.div7} ${styles.img}`}>
          <div className={styles.img__Child}>
            <Image
              alt=""
              src={image4}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`${styles.div8} ${styles.img}`}>
          <div className={styles.img__Child}>
            <Image
              alt=""
              src={image5}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`${styles.div9} ${styles.img}`}>
          <div className={styles.imgChild}>
            <YoutubeEmbed embedId={"o65gViETEPc"} />
          </div>
        </div>
        <div className={`${styles.div10} ${styles.img}`}>
          <div className={styles.img__Child}>
            <Image
              alt=""
              src={image6}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`${styles.div11} ${styles.img}`}>
          <div className={styles.img__Child}>
            <Image
              alt=""
              src={image7}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IGrid;
