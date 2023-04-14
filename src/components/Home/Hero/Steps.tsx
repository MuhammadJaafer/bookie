import React from "react";
import UI from "../../../styles/UI.module.scss";
import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import num1 from "../../../../public/images/blob1.svg";
import num2 from "../../../../public/images/blob2.svg";
import num3 from "../../../../public/images/blob3.svg";

type StepsProps = {};

const Steps: React.FC<StepsProps> = () => {
  return (
    <div className={`${styles.steps}`}>
      <h1 className={`${styles.steps_title}`}>
        Three Steps to Your Next Read !
      </h1>
      <div className={`${styles.steps_list}`}>
        <div className={`${styles.steps_list_item}`}>
          <Image
            className={`${styles.steps_list_item_img}`}
            src={num1}
            alt={"1"}
          />
          <h3 className={`${styles.steps_list_item_title}`}>Find your book</h3>
          <p className={`${styles.steps_list_item_para}`}>
            Use our search bar or browse through our categories to locate the
            book you want to order. We offer a vast selection of titles and
            genres to choose from.
          </p>
        </div>
        <div className={`${styles.steps_list_item}`}>
          <Image
            className={`${styles.steps_list_item_img}`}
            src={num2}
            alt={"2"}
          />
          <h3 className={`${styles.steps_list_item_title}`}>Add to cart</h3>
          <p className={`${styles.steps_list_item_para}`}>
            Once you&apos;ve found the book you want, simply add it to your
            shopping cart. You can continue shopping or proceed to checkout when
            you&apos;re ready.
          </p>
        </div>
        <div className={`${styles.steps_list_item}`}>
          <Image
            className={`${styles.steps_list_item_img}`}
            src={num3}
            alt={"3"}
          />
          <h3 className={`${styles.steps_list_item_title}`}>
            Checkout & enjoy
          </h3>
          <p className={`${styles.steps_list_item_para}`}>
            Enter shipping and payment details to complete order. Once
            confirmed, we&apos;ll handle the rest and ship your book to your
            doorstep. Enjoy your new read!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Steps;
