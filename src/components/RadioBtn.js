import React from 'react';
import PropTypes from 'prop-types';

function RadioBtn({ propName, planTitle, planIcon, price, info, setInfo }) {
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
      <img src={planIcon} alt="" />
      {planTitle}
      {priceLabel}
      <input
        type="radio"
        name="add-on"
        value={propName}
        onChange={() => {
          setInfo({ ...info, plan: planTitle });
        }}
      />
    </label>
  );
}

RadioBtn.propTypes = {
  propName: PropTypes.string,
  planTitle: PropTypes.string,
  planIcon: PropTypes.string,
  price: PropTypes.number,
  info: PropTypes.object,
  setInfo: PropTypes.func,
};

export default RadioBtn;
