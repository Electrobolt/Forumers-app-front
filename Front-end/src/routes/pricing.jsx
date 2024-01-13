import styles from "../styleSheets/pricing.module.css";
import PricingItem from "../components/PricingItem.jsx";
import { useAuth0 } from "@auth0/auth0-react";
const Pricing = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className={styles["pricing-container"]}>
      {!isAuthenticated && (
        <PricingItem
          type="FREE"
          text="Run your blog and side projects on ngrok free forever"
          content_button="Get Started"
          link="/account"
        />
      )}
      <PricingItem
        type="PREMIUM"
        text="Deliver globally available high-performance apps and APIs"
        content_button="Subscribe"
        link="/account/suscribe"
      />
      <PricingItem
        type="VIP"
        text="For businesses with additional security and support needs"
        content_button="Subscribe"
        link="/account/suscribe"
      />
    </div>
  );
};
export default Pricing;
