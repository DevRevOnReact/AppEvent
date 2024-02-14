import { useEffect, useRef } from "react";
import gsap from "gsap";

interface UseMarqueeProps {
  repeat: number;
  cl: any;
}

const useMarquee = ({ repeat, cl }: UseMarqueeProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const marqueeElements = marqueeContainer.querySelectorAll(
      `.${cl.gradient}`,
    );
    const rate = 200;

    for (let i = 0; i < marqueeElements.length; i++) {
      const el = marqueeElements[i] as HTMLElement;
      const distance = el.clientWidth;
      const style = window.getComputedStyle(el);
      const marginRight = parseInt(style.marginRight || "0", 10);
      const totalDistance = distance + marginRight;
      const time = totalDistance / rate;

      gsap.to(el.parentElement, {
        duration: time,
        repeat: repeat,
        x: "-" + totalDistance,
        ease: "none",
      });
    }
  }, [repeat, cl]);

  return marqueeRef;
};

export default useMarquee;
