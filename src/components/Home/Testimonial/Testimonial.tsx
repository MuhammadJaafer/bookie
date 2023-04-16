import React from "react";
import UI from "../../../styles/UI.module.scss";
import styles from "../../../styles/Home.module.scss";
import avatar1 from "../../../../public/images/Avatar1.png";
import avatar2 from "../../../../public/images/Avatar2.png";
import avatar3 from "../../../../public/images/Avatar3.png";
import TestimonialCard from "./TestimonialCard";

type TestimonialProps = {};
const testimonialData = [
  {
    name: "Hollie Stevens",
    text: "I stumbled upon this amazing website that sells books and I've been hooked ever since!",
    icon: avatar1,
  },
  {
    name: "Bobbi Carey",
    text: "Bookie's website is a book lover's dream come true!",
    icon: avatar2,
  },
  {
    name: "Richard Joseph",
    text: "I can always count on this website to have the latest releases and popular titles.",
    icon: avatar3,
  },
];
const Testimonial: React.FC<TestimonialProps> = () => {
  return (
    <div className={`${styles.testimonial}`}>
      <div className={`${styles.testimonial_text}`}>
        <h2 className={`${styles.testimonial_text_title}`}>
          Our Customers love what we do.
        </h2>
        <p className={`${styles.testimonial_text_para}`}>
          Our book-loving community raves about Bookie&apos;s website and the
          seamless shopping experience it provides!
        </p>
      </div>
      <div className={`${styles.testimonial_cards}`}>
        {testimonialData.map((card) => (
          // eslint-disable-next-line react/jsx-key
          <TestimonialCard text={card.text} name={card.name} icon={card.icon} />
        ))}
      </div>
      <div className={`${styles.testimonial_footer}`}>
        <div className={`${styles.testimonial_footer_triangle1}`}></div>
        <div className={`${styles.testimonial_footer_triangle2}`}></div>
        <div className={`${styles.testimonial_footer_triangle3}`}></div>
        <div className={`${styles.testimonial_footer_triangle4}`}></div>
        <div className={`${styles.testimonial_footer_triangle5}`}></div>
        <div className={`${styles.testimonial_footer_triangle6}`}></div>
      </div>
    </div>
  );
};
export default Testimonial;
