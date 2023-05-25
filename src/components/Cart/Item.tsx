import {
  CartProduct,
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "@/redux/features/Cart/CartSlice";
import { RootState } from "@/redux/store/store";
import Image from "next/image";
import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Cart.module.scss";

type ItemProps = {
  data: CartProduct;
};

const Item: React.FC<ItemProps> = ({ data }) => {
  const cartState = useSelector((state: RootState) => state.Cart);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.cart_items_item}`}>
      <Image
        className={`${styles.cart_items_item_image}`}
        src={data.image}
        alt={"book"}
        width={100}
        height={150}
      />
      <div className={`${styles.cart_items_item_text}`}>
        <h3 className={`${styles.cart_items_item_text_name}`}>{data.name}</h3>
        <p className={`${styles.cart_items_item_text_format}`}>{data.format}</p>
      </div>
      <div className={`${styles.cart_items_item_button}`}>
        <div
          onClick={() => {
            dispatch(addToCart(data));
          }}
          className={`${styles.cart_items_item_button_plus}`}
        >
          <BiPlus />
        </div>
        <div className={`${styles.cart_items_item_button_number}`}>
          {data.quantity}
        </div>
        <div
          onClick={() => {
            dispatch(removeOneFromCart(data));
          }}
          className={`${styles.cart_items_item_button_minus}`}
        >
          <BiMinus />
        </div>
      </div>
      <div className={`${styles.cart_items_item_price}`}>{data.totalPrice}</div>
      <div
        onClick={() => {
          dispatch(removeFromCart(data));
        }}
        className={`${styles.cart_items_item_delete}`}
      >
        <FaRegTrashAlt />
      </div>
    </div>
  );
};
export default Item;
