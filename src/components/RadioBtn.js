import React from 'react';
import PropTypes from 'prop-types';

function RadioBtn({ propName, planTitle, planIcon, price, info, setInfo }) {
  const priceLabel = info.yearly ? `$${price}/yr` : `$${price}/mo`;

  return (
    <label
      htmlFor={propName}
      tabIndex={0}
      className={`mb-3 flex cursor-pointer items-center rounded-md border border-light-gray p-2 hover:border-purplish-blue md:col-span-1 md:flex-col ${
        info.plan === planTitle
          ? 'border-purplish-blue bg-magnolia outline-none ring-0 ring-purplish-blue'
          : null
      }`}
      onKeyDown={(e) => {
        if (e.key === 'Enter') setInfo({ ...info, plan: planTitle });
      }}
    >
      <img src={planIcon} alt="" />
      <strong className="ml-3 text-lg font-medium text-marine-blue md:mt-8 md:ml-0">
        {planTitle}
        <span className="block text-sm font-medium text-cool-gray">
          {priceLabel}
        </span>
        <span className="hidden">2 months free</span>
      </strong>
      <input
        type="radio"
        name="add-on"
        id={propName}
        value={propName}
        checked={info.plan === planTitle}
        onChange={() => {
          setInfo({ ...info, plan: planTitle });
        }}
        className="h-0 w-0 opacity-0"
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
