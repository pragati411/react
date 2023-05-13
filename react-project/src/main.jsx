import React from "react";
import ReactDOM from "react-dom/client";
import WithStyledComponentExample from "../../optimization/StyleComponent";
import UseIdExample from "../../optimization/uniqueId";
import ImplementDarkTheme from "./First";

import { MainRoutesPage } from "./routes";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },

//   {
//     path: "*",
//     element: <Error />,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(<MainRoutesPage />);
