import React from 'react';
import PropTypes from 'prop-types';
import FormBtn from './FormBtn';

function Form(props) {
  function goBack() {
    let step = props.step;
    step--;
    props.setStep(step);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let step = props.step;
    step++;
    props.setStep(step);
  }

  return (
    <>
      <form id={props.id} onSubmit={handleSubmit}>
        <h1>{props.title}</h1>
        <p>{props.para}</p>
        {props.list}
      </form>

      <nav>
        {props.id !== 'step-1' ? (
          <FormBtn submit={false} text="Go Back" goBack={goBack} />
        ) : null}
        <FormBtn id={props.id} submit={true} text="Next Step" />
      </nav>
    </>
  );
}

Form.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  para: PropTypes.string,
  list: PropTypes.any,
  step: PropTypes.number,
  setStep: PropTypes.func,
  info: PropTypes.object,
  setInfo: PropTypes.func,
};

export default Form;
