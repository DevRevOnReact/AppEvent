import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItemFromCart,
} from "./../../store/features/cartSlice";
import { RootState } from "../../store/store";
import cl from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../ui/Button/Button";
import { Marquee } from "../../ui/Marquee/Marquee";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleRemoveItem = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Marquee text="Корзина" repeat={10} />
      <div className={cl.cart}>
        {cartItems.length === 0 ? (
          <div className={cl.emptyCart}>Корзина пуста</div>
        ) : (
          <div className={cl.container}>
            <table className={cl.table}>
              <thead>
                <tr>
                  <th>Фото</th>
                  <th>Название</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Убрать</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      style={{ marginBottom: 20 }}
                      className={cl.cartItem}
                    >
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          className={cl.productImage}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price} руб.</td>
                      <td>{item.quantity}</td>
                      <td>
                        <Button onClick={() => handleRemoveItem(item.id)}>
                          Убрать
                        </Button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
            <div className={cl.cartFooter}>
              <div className={cl.totalItems}>
                Общее количество товаров:{" "}
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </div>
              <div className={cl.totalPrice}>Итого: {total} руб.</div>
              <Button onClick={handleClearCart}>Очистить корзину</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
