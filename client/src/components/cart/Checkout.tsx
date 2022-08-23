import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "test",
  currency: "EUR",
  intent: "capture",
};

export default function Checkout({ cartPrice }: any) {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          shape: "pill",
          label: "paypal",
        }}
        className="paypalButtons"
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: cartPrice,
                  currency_code: "EUR",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions: any) => {
          return actions.order.capture().then((details: any) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
