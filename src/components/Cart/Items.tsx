"use client";
import { closeCart } from "@/redux/features/Cart/CartSlice";
import { RootState } from "@/redux/store/store";
import React from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Cart.module.scss";
import Item from "./Item";

type ItemsProps = {};

const Items: React.FC<ItemsProps> = () => {
  const cartState = useSelector((state: RootState) => state.Cart);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.cart_items}`}>
      <div className={`${styles.cart_items_header}`}>
        <div className={`${styles.cart_items_header_cartIcon}`}>
          <FiShoppingCart />
        </div>

        <div className={`${styles.cart_items_header_text}`}>
          Cart ({cartState.numberOfProducts})
        </div>
        <div className={`${styles.cart_items_header_dot}`}></div>
        <div
          onClick={() => {
            dispatch(closeCart());
          }}
          className={`${styles.cart_items_header_close}`}
        >
          <FiX />
        </div>
      </div>
      <div className={`${styles.cart_items_container}`}>
        {cartState.products.map((product) => (
          <Item data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default Items;
