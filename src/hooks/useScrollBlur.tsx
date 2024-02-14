import { useEffect, useState } from "react";

const useScrollBlur = (blurThreshold) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > blurThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [blurThreshold]);

  return isScrolled;
};

export default useScrollBlur;
