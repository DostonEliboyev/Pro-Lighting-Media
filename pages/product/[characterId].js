import { useRouter } from "next/router";
import styles from "./character.module.css"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image";
import atamik from "../../public/prodPhoto/atamik.jpg"
import xIcon from "../../asset/img/xIcon.svg"
import { product1, product2, product3, product4, product5, product6 } from '../../public/lang/products.json'

export default function Character({ character }) {
  let Fulldata = [...product1, ...product2, ...product3, ...product4, ...product5, ...product6]
  const { locale, locales, asPath } = useRouter();
  console.log(character)
  return (
    <div className={styles.container}>


      {character
        .filter((p) => p.locale === locale)
        .map((blogPost, i) => {
          return (
            <>
              <Head key={i}>
                <title>{blogPost.title}</title>
                <meta name="description"  content={`width=device-width, initial-${blogPost.title}`} />
                <meta property="og:title" content={`Learn more about ${blogPost.description}`} />
                <meta property="og:description" content={`${blogPost.description}`} />
                <meta property="og:url" content="https://www.plm.uz/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico /" />
              </Head>

              <div
                className={styles.card}
                key={i}
              >
                <span className={styles.closeIcon}>
                  <Link href="/rent">
                    <Image src={xIcon} alt={styles.closeIcon} />
                  </Link>
                </span>

                <div className={styles.card_left}>
                  <h3>{blogPost.title}</h3>
                  <Image src={`${blogPost.image}`} height={300} width={300} alt={blogPost.title} />
                </div>
                <div className={styles.card_right}>
                  <h4>{blogPost.script}</h4>
                  <p>{blogPost.description}</p>
                </div>
              </div>

            </>

          );
        })}

      {/* <div className={styles.offerProduct}>

        <div className={styles.offerCard}>
          <Image src={atamik} layout='fill' alt="Sharpy" />
          <h3>Sharpy</h3>
        </div>
        <div className={styles.offerCard}>
          <Image src={atamik} layout='fill' alt="Sharpy" />
          <h3>Sharpy</h3>
        </div>
        <div className={styles.offerCard}>
          <Image src={atamik} layout='fill' alt="Sharpy" />
          <h3>Sharpy</h3>
        </div>
        <div className={styles.offerCard}>
          <Image src={atamik} layout='fill' alt="Sharpy" />
          <h3>Sharpy</h3>
        </div>

      </div> */}


    </div>
  )
}

export async function getStaticProps({ params }) {
  let Fulldata = [...product1, ...product2, ...product3, ...product4, ...product5, ...product6]

  const characterId = params.characterId
  // const results = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${characterId}`).then(res => res.json());
  // const characterId = params.characterId.replace(/\-/g, '+')
  const results = Fulldata.filter(item => item.title.toLowerCase() === characterId.toLowerCase())

  console.log(product1)
  return {
    props: {
      character: results
    }
  }
}

export async function getStaticPaths() {
  // const characters = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500').then(res => res.json());

  let Fulldata = [...product1, ...product2, ...product3, ...product4, ...product5, ...product6]
  const paths = Fulldata.map(character => {
    const characterId = character.title;
    return {
      params: {
        characterId
      }
    }
  });
  console.log('paths', paths)
  return {
    paths,
    fallback: false
  }
}   