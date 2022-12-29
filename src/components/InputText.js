import React from 'react';
import PropTypes from 'prop-types';

function InputText({ propName, type, label, placeholder, info, setInfo }) {
  return (
    <label className="flex flex-wrap items-center justify-between">
      <strong className="text-sm font-normal text-marine-blue">{label}</strong>
      <span className="invisible text-sm font-normal text-strawberry-red peer-invalid:visible">
        This field is required
      </span>
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
        className="peer mb-2 mt-1 w-full cursor-pointer rounded-md text-base font-medium text-marine-blue placeholder:text-cool-gray invalid:border-strawberry-red invalid:outline-none invalid:ring-0 invalid:ring-strawberry-red focus:border-purplish-blue focus:outline-none focus:ring-0 focus:ring-purplish-blue"
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
