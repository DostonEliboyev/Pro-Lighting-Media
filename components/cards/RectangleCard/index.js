import { useRouter } from "next/router";
import onehero from "../../../public/lang/onehero.json";

import styles from "./index.module.css";
import CardPade from "./../cardPade/index";
import OrderNow from "../../buttons/index";
import Boss from "../../../public/lang/team.json"
function RectangleCard() {
  const { locale, locales, asPath } = useRouter();
  return (
    <section className={styles.contianer}>
      <div className={styles.wrapper__title}>
        {onehero.about4
          .filter((p) => p.locale === locale)
          .map((blogPost, i) => {
            return (
              <>

                <div key={i}>
                  <p>{blogPost.h1}</p>
                  <h1 className="whiteYellowTittle">
                    <span>{blogPost.h4}</span> {blogPost.button}
                  </h1>
                </div>

                {/* <OrderNow name={blogPost.button2} href={"/rent"} /> */}
              </>
            );
          })}
      </div>
      <div className={styles.wrapper}>
        <CardPade team={Boss.Bosses} />
      </div>
    </section>
  );
}
export default RectangleCard;
