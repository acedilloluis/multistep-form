import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Checkbox({ name, label, price, info, setInfo, toggleBtn }) {
  const [checked, setChecked] = useState(false);
  const priceLabel = info.yearly ? `+$${price}/yr` : `+$${price}/mo`;

  const checkbox = (
    <label>
      {name}
      <span>{label}</span>
      <span>{priceLabel}</span>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        value={checked}
        onChange={() => {
          setChecked(!checked);
          setInfo({ ...info, name: checked });
        }}
      />
    </label>
  );

  const toggle = (
    <label>
      Switch to yearly or monthly plan.
      <input
        type="checkbox"
        name={name}
        checked={checked}
        value={checked}
        onChange={() => {
          setChecked(!checked);
          setInfo({ ...info, name: checked });
        }}
      />
    </label>
  );

  return toggleBtn ? toggle : checkbox;
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.number,
  info: PropTypes.object,
  setInfo: PropTypes.func,
  toggleBtn: PropTypes.bool,
};

export default Checkbox;
