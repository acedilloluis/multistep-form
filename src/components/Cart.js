import React from 'react';
import PropTypes from 'prop-types';

function Cart({ info, MON_PRICES, multi, ADD_ONS, setStep }) {
  const plan = info.plan.toLowerCase();
  let total = MON_PRICES[plan] * multi;

  const planSuffix = info.yearly ? 'Yearly' : 'Monthly';
  const priceSuffix = info.yearly ? '/yr' : '/mo';
  const totalSuffix = info.yearly ? 'per year' : 'per month';

  const addOnList = Object.keys(info.addOns).map((key) => {
    if (info.addOns[key]) {
      total += MON_PRICES[key] * multi;
      const addOnTitle = ADD_ONS[key][0];
      const addOnDescr = ADD_ONS[key][0];
      return (
        <li
          key={addOnTitle}
          className="mb-2 flex items-center justify-between last:mb-0"
        >
          <span className="font-medium text-cool-gray">{addOnDescr}</span>
          <strong className="font-normal text-marine-blue">
            {`+$${MON_PRICES[key] * multi}${priceSuffix}`}
          </strong>
        </li>
      );
    }
  });

  return (
    <>
      <ul className="bg-magnolia p-4">
        <li className="mb-2 flex items-center justify-between border-b border-b-light-gray pb-2">
          <span className="font-medium text-marine-blue">
            {`${info.plan} (${planSuffix})`}
            <br />
            <span>
              <button
                type="button"
                onClick={() => {
                  setStep(2);
                }}
                className="font-medium text-cool-gray underline"
              >
                Change
              </button>
            </span>
          </span>
          <strong className="font-bold text-marine-blue">
            {`$${MON_PRICES[plan] * multi}${priceSuffix}`}
          </strong>
        </li>
        {addOnList}
      </ul>
      <div className="flex w-full items-center justify-between p-4">
        <span className="font-medium text-cool-gray">
          {`Total (${totalSuffix})`}
        </span>
        <strong className="text-lg font-bold text-purplish-blue">
          {`$${total}${priceSuffix}`}
        </strong>
      </div>
    </>
  );
}

Cart.propTypes = {
  info: PropTypes.object,
  MON_PRICES: PropTypes.object,
  multi: PropTypes.number,
  ADD_ONS: PropTypes.object,
  setStep: PropTypes.func,
};

export default Cart;
