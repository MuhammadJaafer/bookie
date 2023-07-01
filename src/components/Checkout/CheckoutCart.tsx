import { RootState } from "@/redux/store/store";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Checkout.module.scss";
import Item from "../Cart/Item";
type CheckoutCartProps = {};

const CheckoutCart: React.FC<CheckoutCartProps> = () => {
  const cartState = useSelector((state: RootState) => state.Cart);
  const checkoutState = useSelector((state: RootState) => state.Checkout);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.checkout_cart_container}`}>
      <div className={`${styles.checkout_cart_container_header}`}>
        <div className={`${styles.checkout_cart_container_header_cartIcon}`}>
          <FiShoppingCart />
        </div>

        <div className={`${styles.checkout_cart_container_header_text}`}>
          Cart ({cartState.numberOfProducts})
        </div>
        <div className={`${styles.checkout_cart_container_header_dot}`}></div>
      </div>
      <div className={`${styles.checkout_cart_container_items}`}>
        {cartState.products.map((product) => (
          <Item data={product} key={product.id} />
        ))}
      </div>
      <div className={`${styles.checkout_cart_container_total}`}>
        <div className={`${styles.checkout_cart_container_total_receipt}`}>
          <div
            className={`${styles.checkout_cart_container_total_receipt_item}`}
          >
            <span
              className={`${styles.checkout_cart_container_total_receipt_item_text}`}
            >
              Total
            </span>
            <span
              className={`${styles.checkout_cart_container_total_receipt_item_cost}`}
            >
              {cartState.subtotal}$
            </span>
          </div>
        </div>
        <button
          className={`${styles.checkout_cart_container_total_button} ${
            !checkoutState.payment.done &&
            styles.checkout_cart_container_total_button_close
          }`}
        >
          <span>Place Order</span>
          {!checkoutState.payment.done && <HiLockClosed />}
        </button>
        <p className={`${styles.checkout_cart_container_total_para}`}>
          Psst, get it now before it sells out.
        </p>
      </div>
    </div>
  );
};
export default CheckoutCart;
