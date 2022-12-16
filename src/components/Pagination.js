import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ STEPS, step }) {
  const circleList = Object.keys(STEPS).map((key, i) => {
    // Need to shift i by 1 since step starts at 1
    return (
      <li
        key={key}
        className={`ml-3 inline w-7 rounded-[50%] border border-solid border-white text-center font-medium ${
          step === i + 1 ? 'bg-light-blue text-black' : 'text-white'
        }`}
      >
        {i + 1}
      </li>
    );
  });

  return (
    <ol className="absolute top-[5%] flex w-full items-center justify-center">
      {circleList}
    </ol>
  );
}

Pagination.propTypes = {
  STEPS: PropTypes.object,
  step: PropTypes.number,
};

export default Pagination;
