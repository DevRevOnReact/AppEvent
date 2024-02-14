import * as React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { addItemToCart } from "../../../store/features/cartSlice";
import cl from "./style.module.scss";
import { Button } from "../../../ui/Button/Button";

export const CatalogItem: React.FC<{ item: any; index: number }> = ({
  item,
  index,
}) => {
  const dispatch = useDispatch();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={cl.catalog__item}>
      <div className={cl.catalog__item_container}>
        <motion.img
          className={cl.catalog__item_img}
          src={item.image}
          alt={item.name}
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.14 }}
          className={cl.catalog__item_name}
        >
          {item.name}
        </motion.p>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.18 }}
          className={cl.catalog__item_price}
        >
          {item.price} руб.
        </motion.p>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.22 }}
        >
          <Button onClick={() => dispatch(addItemToCart(item))}>
            Добавить в корзину
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
