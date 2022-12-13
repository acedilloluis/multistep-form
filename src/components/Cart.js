import React from 'react';
import PropTypes from 'prop-types';

function Cart({ info, MON_PRICES, multi }) {
  const plan = info.plan.toLowerCase();
  let total = MON_PRICES[plan] * multi;

  const planSuffix = info.yearly ? 'Yearly' : 'Monthly';
  const priceSuffix = info.yearly ? '/yr' : '/mo';
  const totalSuffix = info.yearly ? 'per year' : 'per month';

  const addOnList = Object.keys(info.addOns).map((key) => {
    if (info.addOns[key][0]) {
      total += MON_PRICES[key] * multi;
      return (
        <li key={info.addOns[key][1]}>
          <span>{info.addOns[key][1]}</span>
          <strong>{`+$${MON_PRICES[key] * multi}${priceSuffix}`}</strong>
        </li>
      );
    }
  });

  return (
    <ul>
      <li>
        <span>{`${info.plan} (${planSuffix})`}</span>
        <strong>{`$${MON_PRICES[plan] * multi}${priceSuffix}`}</strong>
      </li>
      {addOnList}
      <li>
        <span>{`Total (${totalSuffix})`}</span>
        <strong>{`${total}${priceSuffix}`}</strong>
      </li>
    </ul>
  );
}

Cart.propTypes = {
  info: PropTypes.object,
  MON_PRICES: PropTypes.object,
  multi: PropTypes.number,
};

export default Cart;
