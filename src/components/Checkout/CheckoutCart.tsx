import { RootState } from "@/redux/store/store";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Checkout.module.scss";
import Item from "../Cart/Item";
type CheckoutCartProps = {};
const receipt = [
  { label: "Total", cost: 2.43 },
  { label: "Subtotal", cost: 22.34 },
  { label: "Duties", cost: 23.23 },
  { label: "Shipping", cost: 10.0 },
];
const CheckoutCart: React.FC<CheckoutCartProps> = () => {
  const cartState = useSelector((state: RootState) => state.Cart);
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
          {receipt.map((item, i) => (
            <div
              className={`${styles.checkout_cart_container_total_receipt_item}`}
              key={i}
            >
              <span
                className={`${styles.checkout_cart_container_total_receipt_item_text}`}
              >
                {item.label}
              </span>
              <span
                className={`${styles.checkout_cart_container_total_receipt_item_cost}`}
              >
                {item.cost}$
              </span>
            </div>
          ))}
        </div>
        <button className={`${styles.checkout_cart_container_total_button}`}>
          Place Order
        </button>
        <p className={`${styles.checkout_cart_container_total_para}`}>
          Psst, get it now before it sells out.
        </p>
      </div>
    </div>
  );
};
export default CheckoutCart;
