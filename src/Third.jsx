import { useContext } from "react";
import { switchThemeContext } from "./context/themeContext";
export const Third = () => {
  const third = useContext(switchThemeContext);

  console.log(third);
  return (
    <>
      <h1 style={{ backgroundColor: third.theme, color: "green" }}>
        I Am from INDIA
      </h1>
    </>
  );
};
