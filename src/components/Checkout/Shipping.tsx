import React from "react";
import styles from "../../styles/Checkout.module.scss";

type ShippingProps = {};

const Shipping: React.FC<ShippingProps> = () => {
  return (
    <div className={`${styles.checkout_forms_container}`}>
      <div className={`${styles.checkout_forms_container_header}`}>
        <div className={`${styles.checkout_forms_container_header_number}`}>
          1
        </div>
        <h2 className={`${styles.checkout_forms_container_header_text}`}>
          Shipping
        </h2>
        <div className={`${styles.checkout_forms_container_header_edit}`}>
          edit
        </div>
      </div>
      <div className={`${styles.checkout_forms_container_form}`}>
        <input
          className={`${styles.checkout_forms_container_form_input}`}
          type="text"
          placeholder="Full Name*"
          required
        />
        <input
          className={`${styles.checkout_forms_container_form_input}`}
          type="text"
          placeholder="Email*"
          required
        />
        <input
          className={`${styles.checkout_forms_container_form_input}`}
          type="text"
          placeholder="Country*"
          required
        />
        <input
          className={`${styles.checkout_forms_container_form_input}`}
          type="text"
          placeholder="Phone Number*"
          required
        />
        <div className={`${styles.checkout_forms_container_form_label}`}>
          Shipping Address
        </div>
        <input
          className={`${styles.checkout_forms_container_form_input}`}
          type="text"
          placeholder="Street Address*"
          required
        />
        <input
          className={`${styles.checkout_forms_container_form_input}`}
          type="text"
          placeholder="State/Province"
        />
        <div className={`${styles.checkout_forms_container_form_wrapper}`}>
          <input
            className={`${styles.checkout_forms_container_form_input}`}
            type="text"
            placeholder="City*"
            required
          />
          <input
            className={`${styles.checkout_forms_container_form_input}`}
            type="text"
            placeholder="Postal Code*"
            required
          />
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
export default Shipping;
