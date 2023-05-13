import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Firstblacktheme from "./First";
import { Second } from "./Second";
import { SwitchThemeProvider } from "./context/themeContext";

import { Third } from "./Third";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Firstblacktheme />,
  },
  {
    path: "/second",
    element: <Second />,
  },
  {
    path: "/third",
    element: <Third />,
  },
]);
export const MainRoutesPage = () => {
  const [theme, setTheme] = useState("white");
  const [test, setTest] = useState([]);
  const toggleDarkMode = () => {
    setTheme(theme === "black" ? "white" : "black");
  };
  const setTestFunc = (arg) => {
    setTest(arg);
  };
  return (
    <>
      <SwitchThemeProvider value={{ theme, toggleDarkMode, test, setTestFunc }}>
        <RouterProvider router={router} />
      </SwitchThemeProvider>
    </>
  );
};
