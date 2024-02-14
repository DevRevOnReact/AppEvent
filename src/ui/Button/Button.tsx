import * as React from "react";
import cl from "./style.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}
export function Button({ children, onClick, buttonRef }: ButtonProps) {
  const ref = buttonRef || React.useRef<HTMLButtonElement>(null);
  return (
    <button ref={ref} className={cl.button} onClick={onClick}>
      {children}
    </button>
  );
}
