import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ step, STEPS }) {
  let circleList = [];

  for (let i = 0; i < STEPS; i++) {
    circleList.push(<div key={i}>{i}</div>);
  }

  return <div>{circleList}</div>;
}

Pagination.propTypes = {
  step: PropTypes.number,
  STEPS: PropTypes.number,
};

export default Pagination;
