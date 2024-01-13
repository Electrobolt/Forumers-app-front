import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
const AccountPage = () => {
  return (
    <div id="account">
      <Dashboard />
      <Outlet />
    </div>
  );
};

export default AccountPage;
