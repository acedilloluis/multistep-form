import React from 'react';
import PropTypes from 'prop-types';

function FormBtn(props) {
  const submitBtn = (
    <button
      type="submit"
      form={props.id}
      className="float-right m-4 rounded-md bg-marine-blue p-3 text-base font-medium text-white"
    >
      {props.text}
    </button>
  );
  const goBackBtn = (
    <button
      type="button"
      onClick={() => props.goBack()}
      className="m-4 rounded-md p-3 text-base font-medium text-cool-gray hover:text-marine-blue"
    >
      {props.text}
    </button>
  );

  return props.submit ? submitBtn : goBackBtn;
}

FormBtn.propTypes = {
  id: PropTypes.string,
  submit: PropTypes.bool,
  text: PropTypes.string,
  goBack: PropTypes.func,
};

export default FormBtn;
