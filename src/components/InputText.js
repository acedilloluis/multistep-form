import React from 'react';
import PropTypes from 'prop-types';

function InputText({ propName, type, label, placeholder, info, setInfo }) {
  return (
    <label>
      <div className="relative">
        <strong className="mt-1 text-sm font-normal text-marine-blue">
          {label}
        </strong>
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
          required={true}
          className="peer mb-2 mt-1 w-full cursor-pointer rounded-md text-base font-medium text-marine-blue placeholder:text-cool-gray invalid:border-strawberry-red invalid:outline-none invalid:ring-0 invalid:ring-strawberry-red focus:border-purplish-blue focus:outline-none focus:ring-0 focus:ring-purplish-blue"
        />
        <span className="invisible absolute top-1 right-0 text-sm font-normal text-strawberry-red peer-invalid:visible">
          This field is required
        </span>
      </div>
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
