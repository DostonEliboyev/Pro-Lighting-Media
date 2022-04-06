import React from "react";
import Image from "next/image";
import styles from "./ourPantner.module.css"
import Img from "../../asset/img/ourPartner/microsoft.png"



const OurPartner = () => {
     
    
  return (
    <div className={styles.contianer}>
          <Image alt="" src={ Img}/>
          <Image alt="" src={ Img}/>
          <Image alt="" src={ Img}/>
          <Image alt="" src={ Img}/>
          <Image alt="" src={ Img}/>
          <Image alt="" src={ Img}/>
         
    </div>
  );
};

export default OurPartner;
