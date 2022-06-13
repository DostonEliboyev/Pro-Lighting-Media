import React, { useState } from "react";
import { useRouter } from "next/router";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Head from "next/head";
import HomeBgImage from "./../container/HomeBgImage";
import ContactUs from "./../components/form/form";
import OurPartner from "./../components/ourPartner/index";
import rent from "../asset/img/bg/team.png";
import styles from "../styles/Rent.module.css";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Products from "../public/lang/products.json";
import onehero from "../public/lang/onehero.json";
function Rent() {
  const [open, setOpen] = useState(false);
  const [openData, setOpenData] = useState(null);
  const { locale, locales, asPath } = useRouter();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const closeIcon = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.938239 0.937995C1.07758 0.798305 1.2431 0.687476 1.42534 0.611857C1.60757 0.536238 1.80294 0.497314 2.00024 0.497314C2.19754 0.497314 2.3929 0.536238 2.57514 0.611857C2.75738 0.687476 2.9229 0.798305 3.06224 0.937995L11.0002 8.87899L18.9382 0.937995C19.0777 0.798531 19.2433 0.687902 19.4255 0.612425C19.6077 0.536948 19.803 0.4981 20.0002 0.4981C20.1975 0.4981 20.3928 0.536948 20.575 0.612425C20.7572 0.687902 20.9228 0.798531 21.0622 0.937995C21.2017 1.07746 21.3123 1.24303 21.3878 1.42524C21.4633 1.60746 21.5021 1.80276 21.5021 2C21.5021 2.19723 21.4633 2.39253 21.3878 2.57475C21.3123 2.75696 21.2017 2.92253 21.0622 3.062L13.1212 11L21.0622 18.938C21.2017 19.0775 21.3123 19.243 21.3878 19.4252C21.4633 19.6075 21.5021 19.8028 21.5021 20C21.5021 20.1972 21.4633 20.3925 21.3878 20.5747C21.3123 20.757 21.2017 20.9225 21.0622 21.062C20.9228 21.2015 20.7572 21.3121 20.575 21.3876C20.3928 21.463 20.1975 21.5019 20.0002 21.5019C19.803 21.5019 19.6077 21.463 19.4255 21.3876C19.2433 21.3121 19.0777 21.2015 18.9382 21.062L11.0002 13.121L3.06224 21.062C2.92278 21.2015 2.75721 21.3121 2.57499 21.3876C2.39277 21.463 2.19747 21.5019 2.00024 21.5019C1.80301 21.5019 1.60771 21.463 1.42549 21.3876C1.24327 21.3121 1.0777 21.2015 0.938239 21.062C0.798775 20.9225 0.688146 20.757 0.612669 20.5747C0.537192 20.3925 0.498344 20.1972 0.498344 20C0.498344 19.8028 0.537192 19.6075 0.612669 19.4252C0.688146 19.243 0.798775 19.0775 0.938239 18.938L8.87924 11L0.938239 3.062C0.798549 2.92266 0.68772 2.75713 0.612101 2.5749C0.536482 2.39266 0.497559 2.1973 0.497559 2C0.497559 1.80269 0.536482 1.60733 0.612101 1.42509C0.68772 1.24286 0.798549 1.07733 0.938239 0.937995Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
  const stll = {
    height: 100 % "!important",
    width: 100 % "!important",
    border: "1px solid red !important",
  };

  return (
    <div className={styles.containerBig}>
      {onehero.about
        .filter((p) => p.locale === locale)
        .map((blogPost, i) => {
          return (
            <Head key={i}>
              <title>{blogPost.h1}</title>
              <meta name="description" content={`width=device-width, initial-${blogPost.h1}`} />
              <meta property="og:title" content={`Learn more about ${blogPost.h4}`} />
              <meta property="og:description" content={`${blogPost.h4}`} />
              <meta property="og:url" content="https://www.plm.uz/" />
              <meta property="og:type" content="website" />
              <link rel="icon" href="/favicon.ico /" />
            </Head>
          );
        })}
      <HomeBgImage image={rent} />
      <div className={styles.contianer}>
        <section className={styles.allAbout}>
          <div className={styles.allAboutCenter}>
            <div>
              <p>Home/Our Team</p>
              <span>ALL ABOUT LIGHTS - ITS ALL </span>
            </div>

            <button>Now Submit</button>
          </div>
        </section>

        <section className={styles.contianerGrid}>
          <div className="ProContianer">
            {/* <ProCircleGold Gtop="0" Gright="-130" />
            <ProCircleGold Gbottom="120" Gleft="-100" /> */}
            <Tabs>
              <TabList className={styles.Tab}>
              {Products.productCategory
                    .filter((p) => p.locale === locale)
                    .map((blogPost, i) => {
                      return (
                        <Tab className={styles.TabChild} key={i}>{blogPost.title}</Tab>
                      );
                    })}
              </TabList>

              <TabPanel>
                <div className={styles.TabPanel}>
                  {Products.product1
                    .filter((p) => p.locale === locale)
                    .map((blogPost, i) => {
                      return (
                        <div
                          className={styles.card}
                          key={i}
                          onClick={() => {
                            onOpenModal()
                            setOpenData(blogPost)
                          }}
                        >
                          <Image src={`${blogPost.image}`} layout='fill' alt={blogPost.title} />
                          <h3>{blogPost.title}</h3>
                        </div>
                      );
                    })}
                </div>

              </TabPanel>
              <TabPanel>
                <div className={styles.TabPanel}>
                  {Products.product2
                    .filter((p) => p.locale === locale)
                    .map((blogPost, i) => {
                      return (
                        <div
                          className={styles.card}
                          key={i}
                          onClick={() => {
                            onOpenModal()
                            setOpenData(blogPost)
                          }}
                        >
                          <Image src={`${blogPost.image}`} layout='fill' alt="" />
                          <h3>{blogPost.title}</h3>
                        </div>
                      );
                    })}
                </div>
              </TabPanel>
              <TabPanel >
                <div className={styles.TabPanel}>
                  {Products.product3
                    .filter((p) => p.locale === locale)
                    .map((blogPost, i) => {
                      return (
                        <div
                          className={styles.card}
                          key={i}
                          onClick={() => {
                            onOpenModal()
                            setOpenData(blogPost)
                          }}
                        >
                          <Image src={`${blogPost.image}`} layout='fill' alt="" />
                          <h3>{blogPost.title}</h3>
                        </div>
                      );
                    })}
                </div>

              </TabPanel>
              <TabPanel >
                <div className={styles.TabPanel}>
                  {Products.product4
                    .filter((p) => p.locale === locale)
                    .map((blogPost, i) => {
                      return (
                        <div
                          className={styles.card}
                          key={i}
                          onClick={() => {
                            onOpenModal()
                            setOpenData(blogPost)
                          }}
                        >
                          <Image src={`${blogPost.image}`} layout='fill' alt={blogPost.title} />
                          <h3>{blogPost.title}</h3>
                        </div>
                      );
                    })}

                </div>
              </TabPanel>
              <TabPanel>
                <div className={styles.TabPanel}>
                  {Products.product5
                    .filter((p) => p.locale === locale)
                    .map((blogPost, i) => {
                      return (
                        <div
                          className={styles.card}
                          key={i}
                          onClick={() => {
                            onOpenModal()
                            setOpenData(blogPost)
                          }}
                        >
                          <Image src={`${blogPost.image}`} layout='fill' alt={blogPost.title} />
                          <h3>{blogPost.title}</h3>
                        </div>
                      );
                    })}

                </div>

              </TabPanel>
              <TabPanel>
                <div className={styles.TabPanel}>
                  {Products.product6
                    .filter((p) => p.locale === locale)
                    .map((blogPost, i) => {
                      return (
                        <div
                          className={styles.card}
                          key={i}
                          onClick={() => {
                            onOpenModal()
                            setOpenData(blogPost)
                          }}
                        >
                          <Image src={`${blogPost.image}`} layout='fill' alt={blogPost.title} />
                          <h3>{blogPost.title}</h3>
                        </div>
                      );
                    })}

                </div>

              </TabPanel>
            </Tabs>
          </div>
          <div>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              closeIcon={closeIcon}
              styles={stll}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "6%",
                  }}
                >
                  <h1 style={{ fontSize: "22px" }}>{openData?.title}</h1>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "58%",

                    display: "flex",
                    padding: "45px 0",
                  }}
                >
                  <div
                    style={{
                      width: "40%",
                    }}
                  >
                    <Image src={`${openData?.image}`} width="400px" height="400px" alt="" />
                  </div>
                  <div
                    style={{
                      width: "60%",
                      paddingLeft: "60px"
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        paddingBottom: "20px",
                      }}
                    >
                      {openData?.script}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        paddingBottom: "20px",
                        lineHeight: "24px",
                      }}
                    >
                      {openData?.description}
                    </p>
                  </div>
                </div>
                {/* <div
                  style={{
                    width: "100%",
                    height: "6%",
                  }}
                >
                  <h1 style={{ fontSize: "22px" }}>{openData?.scrPip}</h1>
                </div> */}
                {/* <div
                  style={{
                    width: "100%",
                    height: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className={styles.card}
                    style={{
                      width: "250px",
                      height: "250px",
                    }}
                  >
                    <Image src={img} alt="" />
                    <h3>Light Sky F400BSW</h3>
                  </div>
                  <div
                    className={styles.card}
                    style={{
                      width: "250px",
                      height: "250px",
                    }}
                  >
                    <Image src={img} alt="" />
                    <h3>Light Sky F400BSW</h3>
                  </div>
                  <div
                    className={styles.card}
                    style={{
                      width: "250px",
                      height: "250px",
                    }}
                  >
                    <Image src={img} alt="" />
                    <h3>Light Sky F400BSW</h3>
                  </div>
                  <div
                    className={styles.card}
                    style={{
                      width: "250px",
                      height: "250px",
                    }}
                  >
                    <Image src={img} alt="" />
                    <h3>Light Sky F400BSW</h3>
                  </div>
                </div> */}
              </div>
            </Modal>
          </div>
        </section>

        <section>
          <ContactUs />
        </section>
        <section className={styles.ourPart}>
          <OurPartner />
        </section>
      </div>
    </div>
  );
}
export default Rent;
