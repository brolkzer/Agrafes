import {
  faCreditCard,
  faRotateLeft,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PreFooter = () => {
  return (
    <div className="preFooter">
      <div className="delivery">
        <div className="delivery-icon">
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <div className="delivery-text">Livraison gratuite dès 25€ d'achat</div>
      </div>
      <div className="payment">
        <div className="payment-icon">
          <FontAwesomeIcon icon={faCreditCard} />
        </div>
        <div className="payment-text">Paiment sécurisé avec Paypal</div>
      </div>
      <div className="return">
        <div className="return-icon">
          <FontAwesomeIcon icon={faRotateLeft} />
        </div>
        <div className="return-text">Retours gratuits sous 30 jours</div>
      </div>
    </div>
  );
};

export default PreFooter;
