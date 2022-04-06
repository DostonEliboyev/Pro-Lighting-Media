/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import logo_white from "../asset/img/logo_white.png";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div  className={styles.headerBig}>
      <div className={styles.header}>
        <div className={styles.logo__white}>
          <Image src={logo_white} />
        </div>
        <div className="head-main">
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/work">
            <a>OUR WORKS</a>
          </Link>
          <Link href="/rent">
            <a>RENT</a>
          </Link>
          <Link href="/team">
            <a>Our team</a>
          </Link>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </div>
        <div className={styles.searchLang}>
          <div className={styles.search}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 13 13"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path d="M8.87 8.16l3.25 3.25-.7.71-3.26-3.25a5 5 0 1 1 .7-.7zM5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
            </svg>
          </div>
          <div className={styles.lang}>
            <p>Eng</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
