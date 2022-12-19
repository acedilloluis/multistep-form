import React from 'react';
import PropTypes from 'prop-types';

function InputText({ propName, type, label, placeholder, info, setInfo }) {
  // add styling for required tooltip
  return (
    <label>
      <strong className="text-sm font-normal text-marine-blue">{label}</strong>
      <input
        type={type}
        name={label}
        placeholder={placeholder}
        value={info[propName]}
        minLength={1}
        maxLength={50}
        onChange={(e) => {
          setInfo({ ...info, [propName]: e.target.value });
        }}
        required="required"
        className="mb-2 w-full cursor-pointer rounded-md text-base font-medium text-marine-blue placeholder:text-cool-gray focus:border-purplish-blue focus:outline-none focus:ring-0 focus:ring-purplish-blue"
      />
    </label>
  );
}

InputText.propTypes = {
  propName: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  info: PropTypes.object,
  setInfo: PropTypes.func,
};

export default InputText;
