import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./form.module.css";
import contact_us from "../../asset/img/contact_us.png";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.ContactUs}>
      <div className={styles.ContactUs_img}>
        <Image alt="" src={contact_us} />
      </div>
      <div className={styles.ContactUs_form}>
        <h1 className="whiteYellowTittle">
          connect <span>with us</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam
          dignissim habitant venenatis velit in.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.ContactUs_inputs}
        >
          <input {...register("firstName")} placeholder="Name" />

          <input {...register("age", { pattern: /\d+/ })} placeholder="Phone" />
          <textarea
            name="w3review"
            placeholder="Message"
            {...register("textAre")}
            rows="4"
            cols="50"
          ></textarea>

          <input
            type="submit"
            text="send"
            placeholder="A red placeholder text.."
            className={styles.ContactUs_inputs_btn}
          />
        </form>
      </div>
      <div className={styles.ContactUs_img1}>
        <Image alt="" src={contact_us} />
      </div>
    </div>
  );
}

export default ContactUs;
