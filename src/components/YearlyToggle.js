import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function YearlyToggle(props) {
  return (
    <div className="flex items-center justify-center rounded-md bg-magnolia p-2 md:col-span-full">
      <strong
        className={`mr-4 font-medium ${
          props.info.yearly ? 'text-cool-gray' : 'text-marine-blue'
        }`}
      >
        Monthly
      </strong>
      <Checkbox
        name="yearly"
        info={props.info}
        setInfo={props.setInfo}
        toggleBtn={true}
      />
      <strong
        className={`ml-4 font-medium ${
          props.info.yearly ? 'text-marine-blue' : 'text-cool-gray'
        }`}
      >
        Yearly
      </strong>
    </div>
  );
}

YearlyToggle.propTypes = {
  info: PropTypes.object,
  setInfo: PropTypes.func,
};

export default YearlyToggle;
