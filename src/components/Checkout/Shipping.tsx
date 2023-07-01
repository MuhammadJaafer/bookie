import {
  closeShipping,
  openPayment,
  shippingDone,
  togglePayment,
  toggleShipping,
} from "@/redux/features/checkout/CheckoutSlice";
import { RootState } from "@/redux/store/store";
import React from "react";
import { FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Checkout.module.scss";

type ShippingProps = {};

const Shipping: React.FC<ShippingProps> = () => {
  const shipping = useSelector((state: RootState) => state.Checkout.shipping);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.checkout_forms_container}`}>
      <div className={`${styles.checkout_forms_container_header}`}>
        <div
          className={`${styles.checkout_forms_container_header_number} ${
            shipping.done
              ? styles.checkout_forms_container_header_number_done
              : ""
          }`}
        >
          {shipping.done ? <FiCheck /> : <span>1</span>}
        </div>
        <h2 className={`${styles.checkout_forms_container_header_text}`}>
          Shipping
        </h2>
        <div
          onClick={() => {
            dispatch(toggleShipping());
          }}
          className={`${styles.checkout_forms_container_header_edit} ${
            shipping.done
              ? styles.checkout_forms_container_header_edit_show
              : ""
          }`}
        >
          edit
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(closeShipping());
          dispatch(openPayment());
          dispatch(shippingDone());
        }}
        className={`${styles.checkout_forms_container_form} ${
          shipping.open ? styles.checkout_forms_container_form_open : ""
        }`}
      >
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
      </form>
    </div>
  );
};
export default Shipping;
