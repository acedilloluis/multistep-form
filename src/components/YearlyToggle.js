import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function YearlyToggle(props) {
  return (
    <div>
      <strong>Monthly</strong>
      <Checkbox
        name="yearly"
        info={props.info}
        setInfo={props.setInfo}
        toggleBtn={true}
      />
      <strong>Yearly</strong>
    </div>
  );
}

YearlyToggle.propTypes = {
  info: PropTypes.object,
  setInfo: PropTypes.func,
};

export default YearlyToggle;
