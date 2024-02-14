import * as React from "react";
import useMarquee from "../../hooks/useMarquee";
import cl from "./style.module.scss";

interface MarqueeProps {
  text: string;
  repeat: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, repeat }) => {
  const marqueeRef = useMarquee({ repeat, cl });

  return (
    <div className={cl.marquee} ref={marqueeRef}>
      <div className={cl.marquee__container}>
        <span className={cl.gradient}>{text}</span>
        <span className={cl.gradient}>{text}</span>
        <span className={cl.gradient}>{text}</span>
      </div>
    </div>
  );
};
