import { useRouter } from "next/router";
import styles from './company.module.css'
import company from "../../public/lang/company.json";

function Company(){
    const { locale, locales, asPath } = useRouter();
    return(
        <div className={styles.contianer}>
            {company.comContext
              .filter((p) => p.locale === locale)
              .map((blogPost, i) => {
                return (
                 <div key={i} className={styles.com__card}>
                     <span className={styles.com__card__number} >{i+1}</span>
                     <div className={styles.com__card_title}>
                         <h1>{blogPost.title}</h1>
                         <p>{blogPost.description}</p>
                     </div>
                 </div>
                );
              })} 
        </div>
    )
}
export default Company;
