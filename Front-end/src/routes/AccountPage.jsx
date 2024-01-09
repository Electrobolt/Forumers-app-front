import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
const AccountPage = () => {

  return <div>
    <Dashboard />
    <Outlet />
    <Footer />
  </div>;
};

export default AccountPage;
