import Auth0ProviderWithNavigate from "../libs/auth0-provider-with-navigate";
import { useAuth0 } from "@auth0/auth0-react";
import PageLoader from "../components/page-loader";
const LayoutWithAuth0 = ({ children }) => {
  const { isLoading,isAuthenticated } = useAuth0();
  console.log(isLoading,isAuthenticated);
  // if (!isLoading) {
  //   return <PageLoader />;
  // }

  return <Auth0ProviderWithNavigate>{children}</Auth0ProviderWithNavigate>;
};

export default LayoutWithAuth0;
