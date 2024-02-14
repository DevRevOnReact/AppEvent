import { useState, useEffect } from "react";

const useJumpAnimation = (totalItemsCount) => {
  const [isJumping, setIsJumping] = useState(false);

  // Обработчик анимации прыжка
  const handleJumpAnimation = () => {
    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 500); // Время анимации прыжка
  };

  // Обработчик изменения количества товаров в корзине
  useEffect(() => {
    // Проверяем, изменилось ли количество товаров в корзине
    if (totalItemsCount > 0) {
      // Вызываем анимацию прыжка
      handleJumpAnimation();
    }
  }, [totalItemsCount]);

  return isJumping;
};

export default useJumpAnimation;
