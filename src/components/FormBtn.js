import React from 'react';
import PropTypes from 'prop-types';

function FormBtn(props) {
  const submitBtn = (
    <button type="submit" form={props.id}>
      {props.text}
    </button>
  );
  const goBackBtn = (
    <button type="button" onClick={() => props.goBack()}>
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
