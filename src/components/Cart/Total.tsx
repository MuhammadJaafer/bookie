import { RootState } from "@/redux/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Cart.module.scss";

type TotalProps = {};

const Total: React.FC<TotalProps> = () => {
  const cartState = useSelector((state: RootState) => state.Cart);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.cart_total}`}>
      <div className={`${styles.cart_total_container}`}>
        <div className={`${styles.cart_total_container_item}`}>
          <div className={`${styles.cart_total_container_item_text}`}>
            Subtotal
          </div>
          <div className={`${styles.cart_total_container_item_number}`}>
            {cartState.subtotal}$
          </div>
        </div>
      </div>
      <button className={`${styles.cart_total_button}`}>
        Continue to Checkout
      </button>
      <p className={`${styles.cart_total_para}`}>
        Psst, get it now before it sells out.
      </p>
    </div>
  );
};
export default Total;
