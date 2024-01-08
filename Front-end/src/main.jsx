import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
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
    <Auth0Provider
      domain="dev-aq870nmf2gqi3ezg.us.auth0.com"
      clientId="IOo9dg8jihrKsKvzCAj1SgfJ2yN2p9IS"
      authorizationParams={{
        redirect_uri:window.location.origin
      }}
    >

    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
