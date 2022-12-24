import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ title, step, index }) {
  return (
    <li className="flex flex-initial items-center sm:mb-2">
      <span
        className={`m-2 rounded-[50%] border border-solid border-white px-2 text-center font-medium ${
          step === index + 1 ? 'bg-light-blue text-black' : 'text-white'
        }`}
      >
        {index + 1}
      </span>
      <span className="hidden sm:inline ">
        <span className="text-sm font-medium text-light-gray">
          {`Step ${index + 1}`}
        </span>
        <br />
        <strong className="text-base font-medium text-white">{title}</strong>
      </span>
    </li>
  );
}

Pagination.propTypes = {
  title: PropTypes.string,
  step: PropTypes.number,
  index: PropTypes.number,
};

export default Pagination;
