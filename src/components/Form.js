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
      <form
        id={props.id}
        onSubmit={handleSubmit}
        className="absolute top-[15%] mx-4 h-min rounded-md bg-white px-6 py-8 font-sans sm:static sm:mx-0 sm:self-stretch"
      >
        <h1 className="mb-2 text-xl font-bold text-marine-blue">
          {props.title}
        </h1>
        <p className="mb-2 text-base font-medium text-cool-gray">
          {props.para}
        </p>
        {props.list}
      </form>

      <nav className="absolute bottom-0 m-0 w-full bg-white p-0 sm:static sm:px-6">
        {props.id !== 'step-1' ? (
          <FormBtn submit={false} text="Go Back" goBack={goBack} />
        ) : null}
        {props.id !== 'step-4' ? (
          <FormBtn id={props.id} submit={true} text="Next Step" />
        ) : (
          <FormBtn id={props.id} submit={true} text="Confirm" />
        )}
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
