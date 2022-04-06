import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import button_to from "../../asset/img/button_to.png";

function OrderNow({ name, href}) {
  return (
    <Link href={href}  className={styles.order}>
      <a className={styles.order__href}>
        <p className={styles.order__titile}> {name}</p>
        <Image src={button_to} className={styles.order__img} alt="" />
      </a>
    </Link>
  );
}

export default OrderNow;
