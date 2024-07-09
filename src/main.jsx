import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/login/login.jsx";
import Regis from "./pages/regis/regis.jsx";
import Products from "./pages/products/products.jsx";
import Carts from "./pages/carts/carts.jsx";
import { Toaster } from "react-hot-toast";
import store from "./redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
        index: true,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Regis />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </Provider>
  </React.StrictMode>
);
