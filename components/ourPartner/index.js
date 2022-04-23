import React from "react";
import Image from "next/image";
import styles from "./ourPantner.module.css";
import Akfa from "/public/partnior/Akfa.png";
import hilton from "/public/partnior/hilton.png";
import iosis from "/public/partnior/iosis.png";
import Karzinka from "/public/partnior/Korzinka.png";
import Makro from "/public/partnior/MAKRO.png";
import Seoul from "/public/partnior/Seoul.png";
import Dicinvest from "/public/partnior/Dicinvest.png";
import Tashkent_City from "/public/partnior/Tashkent_City.png";
import mirai from "/public/partnior/mirai.png";
import mvazir from "/public/partnior/mvazir.png";

const OurPartner = () => {
  return (
    <div className={styles.contianer}>
      <div>
        <Image className={styles.loga_img} alt="" src={Akfa} />
      </div>
      <div>
        <Image className={styles.loga_img} alt="" src={hilton} />
      </div>
      <div>
        <Image className={styles.loga_img} alt="" src={iosis} />
      </div>
      <div>
        <Image className={styles.loga_img} alt="" src={Karzinka} />
      </div>
      <div>
        <Image className={styles.loga_img} alt="" src={Makro} />
      </div>
      <div>
        <Image className={styles.loga_img} alt="" src={Seoul} />
      </div>
      <div>
        <Image className={styles.loga_img} alt="" src={Tashkent_City} />
      </div>
      <div>
        <Image className={styles.loga_img} alt="" src={Dicinvest} />
      </div>
      <div>
        <Image className={styles.loga_img} alt="" src={mirai} />
      </div>
      <div>
        <Image className={styles.loga_img} alt="" src={mvazir} />
      </div>
    </div>
  );
};

export default OurPartner;
