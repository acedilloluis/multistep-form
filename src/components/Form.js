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
        className="absolute top-[15%] mx-4 h-min rounded-md border-2 bg-white px-4 py-6 font-sans"
      >
        <h1 className="mb-2 text-xl font-bold text-marine-blue">
          {props.title}
        </h1>
        <p className="mb-2 text-base font-medium text-cool-gray">
          {props.para}
        </p>
        {props.list}
      </form>

      <nav className="absolute bottom-0 w-full bg-white">
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
