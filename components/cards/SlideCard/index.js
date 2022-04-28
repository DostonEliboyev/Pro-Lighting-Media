import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import onehero from "../../../public/lang/onehero.json";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Prev from "../../../asset/img/Icons/leftPrev.png";
import Next from "../../../asset/img/Icons/rigthNext.png";
import styles from "./index.module.css";
import Draw from "../../../public/lang/drawing.json";

export default function SimpleSlider() {
  const sliderRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [imgOpen, setImgOpen] = useState(null);
  const { locale, locales, asPath } = useRouter();
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const settings = {
    className: `${styles.SlideImg}`, // <== your custom name
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    ref: sliderRef,
    variableWidth: 350,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    autoplay: true,
    speed: 1000,

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
          {onehero.about3
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <h1 className="whiteYellowTittle" key={i}>
                  <span>{blogPost.h1}</span> {blogPost.h4}
                </h1>
              );
            })}

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
          {Draw.drawing.map((img, index) => (
            <div key={index} className={styles.ImgStyle} onClick={() => {
              onOpenModal()
              setImgOpen(img.image)
            }}>
              <Image alt="" src={img.image} width={500} height={350} />
            </div>
          ))}
        </Slider>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <Image alt="" src={imgOpen} layout="fill" />
      </Modal>

    </section>
  );
}
