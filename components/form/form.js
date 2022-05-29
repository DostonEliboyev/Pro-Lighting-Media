
import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./form.module.css";
import contact_us from "../../asset/img/contact_us.png";
import { useRouter } from "next/router";
import onehero from "../../public/lang/onehero.json";
function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data,e) => {
      const token = '5369599306:AAH2exXdgoXUqIk9SnRVyMPTGSN5EmQAcmQ';
      const chatId = '-748918283';
      const message =  ` Ismi: ${data?.firstName}\n %0A  Number: ${data?.phone}\n%0A  Description: ${data?.textAre}`;
      const url =   `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`
        if (data) {
          try{
            let api = new XMLHttpRequest()
            api.open("GET",url,true)
            api.send()
            
          }catch(error){
            console.log("errors");
          }finally{
            console.log("Success");
            reset()
          }
        }
        
  
  };
  const { locale, locales, asPath } = useRouter();

  return (
    <div className={styles.ContactUs}>
      <div className={styles.ContactUs_img}>
        <Image alt="" src={contact_us} />
      </div>
      {onehero.contact
        .filter((p) => p.locale === locale)
        .map((blogPost, i) => {
          return (
            <div key={i} className={styles.ContactUs_form}>
              <h1 className="whiteYellowTittle">
                {blogPost.h1} <span>{blogPost.h4}</span>
              </h1>

              <p>{blogPost.title}</p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.ContactUs_inputs}
              >
                <input {...register("firstName")} placeholder={blogPost.name} />

                <input {...register("phone", { pattern: /\d+/ })}  placeholder={blogPost.phone} />
                <textarea
                  name="w3review"
                  placeholder={blogPost.message}
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
            </div>);
        })}


      <div className={styles.ContactUs_img1}>
        <Image alt="" src={contact_us} />
      </div>
    </div>
  );
}

export default ContactUs;
