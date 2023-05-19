import { useContext } from "react";

import { switchThemeContext } from "./context/themeContext";
export const Second = () => {
  const p = useContext(switchThemeContext);

  console.log(p);
  return (
    <>
      <h1 style={{ backgroundColor: p.theme, color: "yellow" }}>
        I am FROM MP
      </h1>
    </>
  );
};
