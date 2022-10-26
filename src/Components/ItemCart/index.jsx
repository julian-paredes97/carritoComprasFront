import React, { useContext } from "react";
import {CartContext} from "../../Context/CartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { deleteItemToCart, addItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  //const { id } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} className={styles.image__container}/>
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => addItemToCart(item)}>AGREGAR</button>
            <button onClick={() => deleteItemToCart(item)}>SACAR</button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;