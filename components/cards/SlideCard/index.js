import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Prev from "../../../asset/img/Icons/leftPrev.png";
import Next from "../../../asset/img/Icons/rigthNext.png";
import styles from "./index.module.css";
import Pic from "../../../asset/img/slideBg.png";

export default function SimpleSlider() {
  const sliderRef = useRef(null);

  const settings = {
    className: `${styles.SlideImg}`, // <== your custom name
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    ref: sliderRef,
    variableWidth: 350,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    autoplay: true,
    speed: 2000,
      
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
          variableWidth: true,
          autoplaySpeed: 2000,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          adaptiveHeight: true,
          variableWidth: true,
          autoplaySpeed: 2000,
          autoplay: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          adaptiveHeight: true,
          variableWidth: true,
          autoplaySpeed: 2000,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <section className={styles.contianer}>
      <div>
        <div className={styles.SlideHead}>
          <h1 className="whiteYellowTittle">
            <span>Our</span> Serves
          </h1>
          <div className={styles.prevNext}>
            <div onClick={() => sliderRef.current.slickPrev()}>
              <Image alt="" src={Prev} />
            </div>
            <div onClick={() => sliderRef.current.slickNext()}>
              <Image alt="" src={Next} />
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {Array(10)
            .fill("")
            .map((index) => (
              <div key={index} className={styles.ImgStyle} >
                <Image alt="" src={Pic} />
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}
