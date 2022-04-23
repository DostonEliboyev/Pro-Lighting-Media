import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";
import OrderNow from "../components/buttons/index";
import Image from "next/image";
import logo_white from "../asset/img/logo_white.png";
import Facebook_white from "../asset/img/Facebook_white.svg";
import Instagram_white from "../asset/img/Instagram_white.svg";
import Telegram_white from "../asset/img/Telegram_white.svg";
import Youtube_white from "../asset/img/Youtube_white.svg";
import Link from "next/link";
import blogPosts from "../public/lang/head.json";
import footer from "../public/lang/footer.json";
function Footer() {
  const { locale, locales, asPath } = useRouter();
  return (
    <section className={styles.footer__bg}>
      <div className={styles.footer}>
        <div className={styles.footer__head}>
          <div className={styles.footer__head__left}>
            <div className={styles.logo__white}>
              <Image src={logo_white} alt="" />
            </div>
            {footer.footerOrder
              .filter((p) => p.locale === locale)
              .map((blogPost, i) => {
                return (
                  <OrderNow key={i} name={`${blogPost.title}`} href={"/rent"} />
                );
              })}
           
          </div>

          <div className={styles.footer__head__right}>
          {footer.footerTitle
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <p key={i} className={styles.footer__head__left_titel}>{ blogPost.title}</p>
              );
            })}
          </div>
        </div>

        <div className={styles.footer__arm}>
          {footer.footerContext
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <div className={styles.footer__arm__child} key={i}>
                  <h3>{blogPost.title}</h3>
                  <p>
                  {blogPost.p1}
                  </p>
                  {blogPost.p2}
                 <p> {blogPost.p3}</p>
                </div>
              );
            })}
        
        </div>

        <hr />
        <div className={styles.footer__buttom}>
          <div className={styles.footer__buttom__links}>
            {blogPosts.headLink
              .filter((p) => p.locale === locale)
              .map((blogPost, i) => {
                return (
                  <Link href={`${blogPost.link}`} key={i}>
                    <a>{blogPost.title}</a>
                  </Link>
                );
              })}
          </div>
          <div className={styles.footer__buttom__smm}>
            <Link href="https://www.facebook.com/prolightingmedia">
              <a>
                <Image src={Facebook_white} alt="" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/accounts/login/?next=/prolightingmedia/">
              <a>
                <Image src={Instagram_white} alt="" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src={Telegram_white} alt="" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCelkhH1kgGPK9v0fIwPlxJQ">
              <a>
                <Image src={Youtube_white} alt="" />
              </a>
            </Link>
          </div>
          <div className={styles.footer__buttom__title}>
            <p>Copyright © PROLIGHTINGMEDIA All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
