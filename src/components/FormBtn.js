import React from 'react';
import PropTypes from 'prop-types';

function FormBtn({ submit, forward, text, step, setStep }) {
  const submitBtn = <input type="submit" value={text} />;
  const stepBtn = (
    <button
      type="button"
      onClick={() => {
        forward ? setStep(step++) : setStep(step--);
      }}
    >
      {text}
    </button>
  );

  return submit ? submitBtn : stepBtn;
}

FormBtn.propTypes = {
  submit: PropTypes.bool,
  forward: PropTypes.bool,
  text: PropTypes.string,
  step: PropTypes.number,
  setStep: PropTypes.func,
};

export default FormBtn;
