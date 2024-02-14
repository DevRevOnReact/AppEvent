import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme } from "../../store/features/themesSlice";
import { Button } from "../Button/Button";

export const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button onClick={handleToggleTheme}>
      {isDarkMode ? "Светлая тема" : "Темная тема"}
    </Button>
  );
};
