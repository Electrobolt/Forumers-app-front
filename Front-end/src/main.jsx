import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page.jsx";
import AuthenticationGuard from "./components/authentification-guard.jsx";
import MainPage from "./routes/main-page.jsx";
import SignUpPage, { action as signupAction } from "./routes/sing-up.jsx";
import LoginPage, { action as loginAction } from "./routes/login.jsx";
import LayoutWithAuth0 from "./routes/LayoutWithAuth0.jsx";
import AccountPage from "./routes/AccountPage.jsx";
import { AppProvider } from "./routes/context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutWithAuth0>
        <MainPage />
      </LayoutWithAuth0>
    ),
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
      {
        path: "/account",
        element: <AuthenticationGuard component={AccountPage}/>,
        children:[
          {
            
          }
        ]
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
