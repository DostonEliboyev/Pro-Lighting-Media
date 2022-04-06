import Image from "next/image";
import styles from "../styles/HomeBgImage.module.css"


function HomeBgImage({image}) {
  return(
    <div className={styles.home}>
        <Image src={image} layout="responsive"  alt=""/>;
    </div>

  ) 
}
export default HomeBgImage;
