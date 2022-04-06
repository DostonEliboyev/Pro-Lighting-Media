import HomeBgImage from "./../container/HomeBgImage";
import ContactUs from "./../components/form/form";
import OurPartner from "./../components/ourPartner/index";
import rent from "../asset/img/rent.png";
import styles from "../styles/Rent.module.css";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import img from "../asset/img/products/product3.png";

function Rent() {
  return (
    <div className={styles.containerBig}>
      <HomeBgImage image={rent} />
      <div className={styles.contianer}>
        <section className={styles.TitlePage}></section>
        <section className={styles.contianerGrid}>
          <Tabs>
            <TabList className={styles.Tab}>
              <Tab className={styles.TabChild}>Stage special effects</Tab>
              <Tab className={styles.TabChild}>LED screens</Tab>
              <Tab className={styles.TabChild}>farm for stage</Tab>
              <Tab className={styles.TabChild}>scenes</Tab>
              <Tab className={styles.TabChild}>Lighting equipment</Tab>
            </TabList>

            <TabPanel className={styles.TabPanel}>
              <div className={styles.card}>
                <Image src={img} alt="" />
                <h3>Light Sky F400BSW22</h3>
                <div className={styles.cardHover}>
                  <h3>Hows it goin Fam ?</h3>
                  <p>
                    This is Sachin Samal, your tech mate!!! I love you all. Lets
                    make this world a better place for all of us. Keep
                    prospering...Keep learning!!!
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                <Image src={img} alt="" />
                <h3>Light Sky F400BSW</h3>
              </div>
              <div className={styles.card}>
                <Image src={img} alt="" />
                <h3>Light Sky F400BSW</h3>
              </div>
              <div className={styles.card}>
                <Image src={img} alt="" />
                <h3>Light Sky F400BSW</h3>
              </div>
              <div className={styles.card}>
                <Image src={img} alt="" />
                <h3>Light Sky F400BSW</h3>
              </div>
              <div className={styles.card}>
                <Image src={img} alt="" />
                <h3>Light Sky F400BSW</h3>
              </div>
              <div className={styles.card}>
                <Image src={img} alt="" />
                <h3>Light Sky F400BSW</h3>
              </div>
              <div className={styles.card}>
                <Image src={img} alt="" />
                <h3>Light Sky F400BSW</h3>
              </div>
              <div className={styles.card}>
                <Image src={img} alt="" />
                <h3>Light Sky F400BSW</h3>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 5</h2>
            </TabPanel>
          </Tabs>
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
