import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./index.module.css";


function CardPade({ team }) {
  const { locale, locales, asPath } = useRouter();
  return (
    <div className={styles.bigContainer}>
      {team.filter((p) => p.locale === locale)
        .map((blogPost, i) => {
          return (

            <div className={styles.continer}>
              <div className={styles.ImageBor}>
                <div className={styles.imagecontainer}>
                  <Image
                    src={blogPost.src}
                    alt=""
                    className={styles.imageDeg}
                    width={400}
                    height={400}
                    layout="fill"
                  />
                </div>
              </div>
              <h1> {blogPost.FullName} </h1>
              <p>{blogPost.job}</p>
            </div>
          );
        })}

    </div>
  );
}
export default CardPade;
