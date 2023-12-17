import StripeCheckout from 'react-stripe-checkout';

// eslint-disable-next-line react/prop-types
export function StripeButton({ price }) {
  const stripePrice = price * 100;
  const publishableKey =
    'pk_test_51OOJZ8Dli0P096mLdUruhD0Dzdy4VZTu9UaRB4ebGNAd51hxhjwupdDWqcxLsR8j7IHA356VeEtMCDtn2F4AdyPe00tU201pd7';

  return (
    <StripeCheckout
      label="PayNow"
      name="Airbnbclone"
      description={`Your total is ${price}`}
      amount={stripePrice}
      panelLabel="Pay now!"
      stripeKey={publishableKey}
    />
  );
}
