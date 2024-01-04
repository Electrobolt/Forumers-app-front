import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page.jsx";
import MainPage from "./routes/root.jsx";
import SignUpPage, { action as signupAction } from "./routes/sing-up.jsx";
import LoginPage, { action as loginAction } from "./routes/login.jsx";
import { AppProvider } from "./routes/context.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signup",
        element: <SignUpPage />,
        action: signupAction,
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: loginAction,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
