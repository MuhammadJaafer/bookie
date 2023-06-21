import React from "react";
import styles from "../../styles/Checkout.module.scss";

type PaymentProps = {};

const Payment: React.FC<PaymentProps> = () => {
  return (
    <div className={`${styles.checkout_forms_container}`}>
      <div className={`${styles.checkout_forms_container_header}`}>
        <div className={`${styles.checkout_forms_container_header_number}`}>
          2
        </div>
        <h2 className={`${styles.checkout_forms_container_header_text}`}>
          Payment
        </h2>
        <div className={`${styles.checkout_forms_container_header_edit}`}>
          edit
        </div>
      </div>
      <div className={`${styles.checkout_forms_container_form}`}>
        <div
          className={`${styles.checkout_forms_container_form_radioContainer}`}
        >
          <input
            className={`${styles.checkout_forms_container_form_radioContainer_radio}`}
            type="radio"
            name="payment"
          />
          <h3>Credit Card</h3>
        </div>
        <input
          className={`${styles.checkout_forms_container_form_input}`}
          type="text"
          placeholder="Card Number"
        />
        <div className={`${styles.checkout_forms_container_form_wrapper}`}>
          <input
            className={`${styles.checkout_forms_container_form_input}`}
            type="text"
            placeholder="MM / YY"
            required
          />
          <input
            className={`${styles.checkout_forms_container_form_input}`}
            type="text"
            placeholder="CVC"
            required
          />
        </div>

        <div
          className={`${styles.checkout_forms_container_form_radioContainer}`}
        >
          <input
            className={`${styles.checkout_forms_container_form_radioContainer_radio}`}
            type="radio"
            name="payment"
          />
          <h3>Cash on Delivery</h3>
        </div>

        <button
          className={`${styles.checkout_forms_container_form_button}`}
          type="submit"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};
export default Payment;
