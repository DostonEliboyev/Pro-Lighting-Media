import styles from "../styles/Footer.module.css";
import OrderNow from "../components/buttons/index";
import Image from "next/image";
import logo_white from "../asset/img/logo_white.png";
import Facebook_white from "../asset/img/Facebook_white.svg";
import Instagram_white from "../asset/img/Instagram_white.svg";
import Telegram_white from "../asset/img/Telegram_white.svg";
import Youtube_white from "../asset/img/Youtube_white.svg";
import Link from "next/link";

function Footer() {
  return (
    <section className={styles.footer__bg}>
      <div className={styles.footer}>
        <div className={styles.footer__head}>
          <div className={styles.footer__head__left}>
            <div className={styles.logo__white}>
              <Image src={logo_white} alt=""/>
            </div>
            <p className={styles.footer__head__left_titel}>
              Here you can rent or buy the best LED screens in Tashkent!.
            </p>
          </div>
          <div className={styles.footer__head__right}>
            <OrderNow name={"Order now "} href={"/rent"} />
          </div>
        </div>

        <div className={styles.footer__arm}>
          <div className={styles.footer__arm__child}>
            <h3>contact</h3>
            <p>Email: works@prolightingmedia.uz</p>
            <p>Phone: +998 999 000 999</p>
          </div>
          <div className={styles.footer__arm__child}>
            <h3>Our office</h3>
            <p>123 Alberta St, San Francisco,</p>
            <p>California 94114</p>
          </div>
          <div className={styles.footer__arm__child}>
            <h3>media</h3>
            <p>Press: press@prolightingmedia.uz</p>
            <p>Adverise: advertise@prolightingmedia.uz</p>
          </div>
        </div>

        <hr />
        <div className={styles.footer__buttom}>
          <div className={styles.footer__buttom__links}>
            <Link href="/">
              <a>ABOUT</a>
            </Link>
            <Link href="/work">
              <a>OUR WORKS</a>
            </Link>
            <Link href="/rent">
              <a>RENT</a>
            </Link>
            <Link href="/team">
              <a>OUR TEAM</a>
            </Link>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </div>
          <div className={styles.footer__buttom__smm}>
            <Link href="/">
              <a>
                <Image src={Facebook_white} alt="" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src={Instagram_white}  alt="" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src={Telegram_white}  alt="" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src={Youtube_white}  alt="" />
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
