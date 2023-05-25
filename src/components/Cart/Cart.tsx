import { closeCart } from "@/redux/features/Cart/CartSlice";
import { RootState } from "@/redux/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Cart.module.scss";
import Items from "./Items";
import Total from "./Total";
type CartProps = {};

const Cart: React.FC<CartProps> = () => {
  const cartState = useSelector((state: RootState) => state.Cart);
  const dispatch = useDispatch();
  return (
    <div className={`${cartState.open ? styles.show : styles.hide}`}>
      <div className={`${styles.cart}`}>
        <Items />
        <Total />
      </div>
      <div
        onClick={() => dispatch(closeCart())}
        className={`${styles.overlay}`}
      ></div>
    </div>
  );
};
export default Cart;
