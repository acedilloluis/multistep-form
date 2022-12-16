import React from 'react';
import PropTypes from 'prop-types';

function InputText({ propName, type, label, placeholder, info, setInfo }) {
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
        className="mb-2 w-full text-base font-medium text-cool-gray"
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
