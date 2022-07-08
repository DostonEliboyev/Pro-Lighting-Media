import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo_white from "../asset/img/logo_white.png";
import styles from "../styles/Header.module.css";
import blogPosts from "../public/lang/head.json";

function Header() {
  const [openDrop, setOpenDrop] = useState(false);
  const [headerColor, setHeaderColor] = useState("#ffffff00")
  const { locale, locales, asPath } = useRouter();
  console.log("locale", locale);
  console.log("locales", locales);
  console.log("asPath", asPath);
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  const listenScrollEvent = () => {
    window.scrollY > 20
      ? setHeaderColor("#00000073")
      : setHeaderColor("#ffffff00")
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })
  const scrollSearch = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  return (
    <div className={styles.headerBig} style={{ backgroundColor: headerColor }}>
      <div className={styles.header}>
        <div className={styles.logo__white} onClick={scrollSearch}>
          <Image src={logo_white} alt="" />
        </div>
        <div className={styles.head__main}>
          {blogPosts.headLink
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <Link href={`${blogPost.link}`} key={i}>
                  <a className={`${blogPost.link === asPath ? styles.head__main__a : ""}`}>{blogPost.title}</a>
                </Link>
              );
            })}
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
          {locales.map((l, i) => {
            return (
              <div className={`${styles.lang} ${locale === l ?styles.lang__active:""}`} key={i}>
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.searchLangDrop}>
          <button
            onClick={() => {
              setOpenDrop(!openDrop)
              openNav()
            }}
            className={styles.dropbtn}
          >
            <label htmlFor="check" className={styles.label}>
              <input type="checkbox" className={styles.input} />
              <span className={styles.span}></span>
              <span className={styles.span}></span>
              <span className={styles.span}></span>
            </label>
          </button>

          <div id="myNav" className={styles.overlay} >
            <span className={styles.closebtn} onClick={() => closeNav()}>&times;</span>
            <div className={styles.overlay__content}>
              {blogPosts.headLink
                .filter((p) => p.locale === locale)
                .map((blogPost, i) => {
                  return (
                    <Link href={`${blogPost.link}`} key={i} >
                      <span onClick={() => closeNav()}>{blogPost.title}</span>
                    </Link>
                  );
                })}

              <div className={styles.searchLangNav}>
                {locales.map((l, i) => {
                  return (
                    <div className={`${styles.lang} ${locale === l ?styles.lang__active:""}`} key={i}>
                      <Link href={asPath} locale={l} >
                        {l}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  );
}

export default Header;


