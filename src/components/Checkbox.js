import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
  const price = props.info.yearly
    ? `+$${props.price}/yr`
    : `+$${props.price}/mo`;

  const checkbox = (
    <label>
      {props.title}
      <span>{props.descr}</span>
      <span>{price}</span>
      <input
        type="checkbox"
        checked={props.info.addOns[props.propName]}
        value={props.info.addOns[props.propName]}
        onChange={() => {
          props.setInfo({
            ...props.info,
            addOns: {
              ...props.info.addOns,
              [props.propName]: !props.info.addOns[props.propName],
            },
          });
        }}
      />
    </label>
  );

  const toggle = (
    <label>
      Switch to yearly or monthly plan.
      <input
        type="checkbox"
        checked={props.info.addOns[props.propName]}
        value={props.info.addOns[props.propName]}
        onChange={() => {
          props.setInfo({ ...props.info, yearly: !props.info.yearly });
        }}
      />
    </label>
  );

  return props.toggleBtn ? toggle : checkbox;
}

Checkbox.propTypes = {
  propName: PropTypes.string,
  title: PropTypes.string,
  descr: PropTypes.string,
  price: PropTypes.number,
  info: PropTypes.object,
  setInfo: PropTypes.func,
  toggleBtn: PropTypes.bool,
};

export default Checkbox;
