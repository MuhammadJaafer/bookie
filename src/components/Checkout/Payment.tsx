import {
  closePayment,
  openPayment,
  paymentDone,
  togglePayment,
} from "@/redux/features/checkout/CheckoutSlice";
import { RootState } from "@/redux/store/store";
import { spawn } from "child_process";
import React from "react";
import { FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Checkout.module.scss";

type PaymentProps = {};

const Payment: React.FC<PaymentProps> = () => {
  const payment = useSelector((state: RootState) => state.Checkout.payment);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.checkout_forms_container}`}>
      <div className={`${styles.checkout_forms_container_header}`}>
        <div
          className={`${styles.checkout_forms_container_header_number} ${
            payment.done
              ? styles.checkout_forms_container_header_number_done
              : ""
          }`}
        >
          {payment.done ? <FiCheck /> : <span>2</span>}
        </div>

        <h2 className={`${styles.checkout_forms_container_header_text}`}>
          Payment
        </h2>
        <div
          onClick={() => {
            dispatch(togglePayment());
          }}
          className={`${styles.checkout_forms_container_header_edit} ${
            payment.done ? styles.checkout_forms_container_header_edit_show : ""
          }`}
        >
          edit
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(closePayment());
          dispatch(paymentDone());
        }}
        className={`${styles.checkout_forms_container_form} ${
          payment.open ? styles.checkout_forms_container_form_open : ""
        }`}
      >
        <div
          className={`${styles.checkout_forms_container_form_radioContainer}`}
        >
          <input
            className={`${styles.checkout_forms_container_form_radioContainer_radio}`}
            type="radio"
            name="payment"
            required
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
      </form>
    </div>
  );
};
export default Payment;
