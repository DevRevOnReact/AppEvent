import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useScrollAnimation = () => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return { ref, isVisible };
};

export default useScrollAnimation;
