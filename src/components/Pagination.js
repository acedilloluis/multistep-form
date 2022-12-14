import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ STEPS, step }) {
  const circleList = Object.keys(STEPS).map((key, i) => {
    // Need to shift i by 1 since step starts at 1
    return (
      <div key={key} className={step === i + 1 ? 'bg-light-gray' : null}>
        {i + 1}
      </div>
    );
  });

  return <div>{circleList}</div>;
}

Pagination.propTypes = {
  STEPS: PropTypes.object,
  step: PropTypes.number,
};

export default Pagination;
