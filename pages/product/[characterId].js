import { useRouter } from "next/router";
import styles from "./character.module.css"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image";
import xIcon from "../../asset/img/xIcon.svg"
import ProCircleGold from "../../components/proCircleGold/index"
import { product1, product2, product3, product4, product5, product6 } from '../../public/lang/products.json'
let Fulldata = [...product1, ...product2, ...product3, ...product4, ...product5, ...product6]

export default function Character({ character }) {

  const language = {
    en: "English",
    "ru": "Russian",
    "uz": "uzbekitan"
  }
  const { locale, isFallback } = useRouter();
 
  let random = Math.floor(Math.random() * 96)
  if (isFallback) {
    return <div className={styles.Loading}>
              <div>
                <div style={{height:'100%'}}>  <ProCircleGold /></div>
                <div className={styles.Loading_p}><p>Loading...</p></div>
              </div>
            </div>
  }
  return (
    <div className={styles.container}>
      {character?.filter((p) => p.locale === locale)
        .map((blogPost, i, ref) => {
          return (
            <>
              <Head key={i + 1}>
                <title>{blogPost.title}</title>
                <meta name="description" content={`width=device-width, initial-${blogPost.title}`} />
                <meta property="og:title" content={`Learn more about ${blogPost.description}`} />
                <meta property="og:description" content={`${blogPost.description}`} />
                <meta property="og:url" content="https://www.plm.uz/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico /" />
              </Head>

              <div
                className={styles.card}
                key={blogPost?.title}
              >
                <span className={styles.closeIcon} key={i + 1}>
                  <Link href="/product" innerRef={ref}>
                    <Image src={xIcon} alt={styles.closeIcon} />
                  </Link>
                </span>

                <div className={styles.card_left}>
                  <h3>{blogPost.title}</h3>
                  <Image src={`${blogPost?.image}`} height={300} width={300} alt={blogPost.title} />
                </div>
                <div className={styles.card_right}>
                  <h4>{blogPost.script}</h4>
                  <p>{blogPost.description}</p>
                </div>
              </div>

            </>

          );
        })}

      <div className={styles.offerProduct}>
        <Link href={`/product/${Fulldata[random]?.link}`}>
          <div className={styles.offerCard}>
            <Image src={Fulldata[random]?.image} layout='fill' alt={Fulldata[random]?.title} />
            <h3>{Fulldata[random]?.title}</h3>
          </div>
        </Link>
        <Link href={`/product/${Fulldata[random]?.link}`}>
          <div className={styles.offerCard}>
            <Image src={Fulldata[random + 3]?.image} layout='fill' alt={Fulldata[random + 3]?.title} />
            <h3>{Fulldata[random + 3]?.title}</h3>
          </div>
        </Link>
        <Link href={`/product/${Fulldata[random]?.link}`}>
          <div className={styles.offerCard}>
            <Image src={Fulldata[random + 6]?.image} layout='fill' alt={Fulldata[random + 6]?.title} />
            <h3>{Fulldata[random + 6]?.title}</h3>
          </div>
        </Link>
        <Link href={`/product/${Fulldata[random]?.link}`}>
          <div className={styles.offerCard}>
            <Image src={Fulldata[random + 9]?.image} layout='fill' alt={Fulldata[random + 9]?.title} />
            <h3>{Fulldata[random + 9]?.title}</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export async function getStaticProps({ params, locale, locales }) {
  const characterId = params.characterId
  const results = Fulldata.filter(item => item.link.toLowerCase() === characterId.toLowerCase())
  return {
    props: {
      character: results,
      locale,
      locales
    }
  }
}

export async function getStaticPaths() {

  const paths = Fulldata.map(character => {
    const characterId = character.link;
    return {
      params: {
        characterId
      }
    }
  });

  return {
    paths,
    fallback: true
  }
}   