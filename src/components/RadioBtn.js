import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RadioBtn({ plan, price, info, setInfo }) {
  const [checked, setChecked] = useState(false);
  const priceLabel = info.yearly ? (
    <strong>
      {`$${price}/yr`}
      <span>2 months free</span>
    </strong>
  ) : (
    <strong>{`$${price}/mo`}</strong>
  );

  return (
    <label>
      {plan}
      {priceLabel}
      <input
        type="radio"
        name="add-on"
        value={plan}
        onChange={() => {
          setChecked(!checked);
          setInfo({ ...info, plan: plan });
        }}
      />
    </label>
  );
}

RadioBtn.propTypes = {
  plan: PropTypes.string,
  price: PropTypes.string,
  info: PropTypes.object,
  setInfo: PropTypes.func,
};

export default RadioBtn;
