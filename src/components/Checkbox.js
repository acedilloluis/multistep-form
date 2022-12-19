import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
  const price = props.info.yearly
    ? `+$${props.price}/yr`
    : `+$${props.price}/mo`;

  const checkbox = (
    <>
      <label
        className={`relative mb-3 flex w-full cursor-pointer flex-nowrap items-center rounded-md border border-light-gray p-3 hover:border-purplish-blue hover:ring-0 hover:ring-purplish-blue ${
          props.info.addOns[props.propName]
            ? 'border-purplish-blue bg-magnolia outline-none ring-0 ring-purplish-blue'
            : null
        }`}
      >
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
          className="peer h-0 w-0 opacity-0"
        />
        <span className="absolute h-6 w-6 rounded-md border border-light-gray peer-checked:border-purplish-blue peer-checked:bg-purplish-blue peer-checked:bg-[url('./images/icon-checkmark.svg')] peer-checked:bg-center peer-checked:bg-no-repeat"></span>
        <strong className="ml-8 flex flex-1 flex-nowrap items-center justify-between">
          <span className="text-base font-medium text-marine-blue">
            {props.title}
            <br />
            <span className="text-sm font-medium text-cool-gray">
              {props.descr}
            </span>
          </span>
          <span className="text-sm font-medium text-purplish-blue">
            {price}
          </span>
        </strong>
      </label>
    </>
  );

  const toggle = (
    <label className="flex cursor-pointer justify-center">
      <em className="sr-only">Switch to yearly or monthly plan.</em>
      {
        //toggle
      }
      <div className="relative">
        <input
          type="checkbox"
          checked={props.info.addOns[props.propName]}
          value={props.info.addOns[props.propName]}
          onChange={() => {
            props.setInfo({ ...props.info, yearly: !props.info.yearly });
          }}
          className="peer sr-only"
        />
        {
          // line
        }
        <div className="block h-5 w-10 rounded-full bg-marine-blue"></div>
        {
          // dot
        }
        <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition peer-checked:translate-x-[150%]"></div>
      </div>
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
