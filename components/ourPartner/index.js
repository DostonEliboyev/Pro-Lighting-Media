import React from "react";
import Image from "next/image";
import styles from "./ourPantner.module.css";
import Img from "../../asset/img/ourPartner/microsoft.png";

const OurPartner = () => {
  return (
    <div className={styles.contianer}>
      <div>
        <Image alt="" src={Img} />
      </div>
      <div>
        <Image alt="" src={Img} />
      </div>
      <div>
        <Image alt="" src={Img} />
      </div>
      <div>
        <Image alt="" src={Img} />
      </div>
      <div>
        <Image alt="" src={Img} />
      </div>
      <div>
        <Image alt="" src={Img} />
      </div>
    </div>
  );
};

export default OurPartner;
