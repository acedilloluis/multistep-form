import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputText({ type, label, placeholder }) {
  const [input, setInput] = useState('');

  return (
    <label>
      {label}
      <input
        type={type}
        name={label}
        placeholder={`e.g. ${placeholder}`}
        value={input}
        minLength={1}
        maxLength={50}
        onChange={(e) => setInput(e.target.value)}
      />
    </label>
  );
}

InputText.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputText;
