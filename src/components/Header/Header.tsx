import * as React from "react";
import cl from "./style.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ThemeToggle } from "../../ui/Theme/ThemeToogle";
import cors from "./../../assets/img/cors.png";
import { motion } from "framer-motion";
import useJumpAnimation from "../../hooks/useJumpAnimation";
import useScrollBlur from "../../hooks/useScrollBlur";

export const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItemsCount = cartItems.reduce(
    (acc, item: { quantity }) => acc + item.quantity,
    0,
  );

  const shouldApplyBlur = useScrollBlur(100);

  const isJumping = useJumpAnimation(totalItemsCount);
  return (
    <header className={`${cl.header}`}>
      <div
        className={`${cl.header__nav} ${
          shouldApplyBlur ? cl.header__blurred : ""
        }`}
      >
        <Link className={cl.header__link} to="/">
          Каталог
        </Link>
        <ThemeToggle />
        <Link to="/cart" className={cl.header__link}>
          {totalItemsCount > 0 && (
            <motion.div
              animate={{ y: isJumping ? [-10, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img className={cl.header__img} src={cors} alt="Корзина" />
              <span className={cl.header__badge}>{totalItemsCount}</span>
            </motion.div>
          )}
          {totalItemsCount === 0 && (
            <>
              <img className={cl.header__img} src={cors} alt="Корзина" />
              <span className={cl.header__badge}>{totalItemsCount}</span>
            </>
          )}
        </Link>
      </div>
    </header>
  );
};
