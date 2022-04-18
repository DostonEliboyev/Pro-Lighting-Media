import Image from "next/image";
import styles from "../styles/HomeBgImage.module.css"


function HomeBgImage({image}) {
  return(
    <div className={styles.home}>
      <Image src={image} className={styles.imageBg} objectFit="cover" layout="responsive"  alt="" />;
      <div className={styles.shadowBg}></div>
      <div className={styles.shadowBgFull}></div>
    </div>

  ) 
}
export default HomeBgImage;
