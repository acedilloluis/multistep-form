import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Pagination from './components/Pagination';
import InputText from './components/InputText';
import Checkbox from './components/Checkbox';
import RadioBtn from './components/RadioBtn';
import FormBtn from './components/FormBtn';
import Cart from './components/Cart';
import bgBarDesktop from './images/bg-sidebar-desktop.svg';
import bgBarMobile from './images/bg-sidebar-mobile.svg';
import arcadeIcon from './images/icon-arcade.svg';
import advancedIcon from './images/icon-advanced.svg';
import proIcon from './images/icon-pro.svg';
import './index.css';
// For next time: finish updating state/code in cart i.e. move monthly price to new objects/update cart code
// Array info: type of HTML input, visible label, placeholder
const USER_TEXT_INPUT = {
  name: ['text', 'Name', 'e.g. Stephen King'],
  email: ['email', 'Email Address', 'e.g. stephenking@lorem.com'],
  phone: ['tel', 'Phone Numer', 'e.g. +1 234 567 890'],
};
// Array info: visible label, img
const PLANS = {
  arcade: ['Arcade', arcadeIcon],
  advanced: ['Advanced', advancedIcon],
  pro: ['Pro', proIcon],
};
// Array info: visible label, description
const ADD_ONS = {
  onlineService: ['Online Service', 'Access to multiplayer games'],
  largerStorage: ['Larger Storage', 'Extra 1TB of cloud save'],
  customProfile: ['Customize Profile', 'Custom theme on your profile'],
};
const MON_PRICES = {
  arcade: 9,
  advanced: 12,
  pro: 15,
  onlineService: 1,
  largerStorage: 2,
  customProfile: 2,
};
const YEARLY_MULTI = 10;
const STEPS = 4;

function App() {
  const [step, setStep] = useState(0);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    yearly: false,
    addOns: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
  });
  const multi = info.yearly ? YEARLY_MULTI : 1;

  const inputList = Object.keys(USER_TEXT_INPUT).map((key) => {
    return (
      <InputText
        key={USER_TEXT_INPUT[key]}
        propName={key}
        type={USER_TEXT_INPUT[key][0]}
        label={USER_TEXT_INPUT[key][1]}
        placeholder={USER_TEXT_INPUT[key][2]}
        info={info}
        setInfo={setInfo}
      />
    );
  });

  const userInfo = (
    <>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      {inputList}
    </>
  );

  const planList = Object.keys(PLANS).map((key) => {
    return (
      <RadioBtn
        key={key}
        propName={key}
        planTitle={PLANS[key][0]}
        planIcon={PLANS[key][1]}
        price={MON_PRICES[key] * multi}
        info={info}
        setInfo={setInfo}
      />
    );
  });

  const plan = (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      {planList}
      <div>
        <strong>Monthly</strong>
        <Checkbox
          name={'yearly'}
          info={info}
          setInfo={setInfo}
          toggleBtn={true}
        />
        <strong>Yearly</strong>
      </div>
    </>
  );

  const addOnList = Object.keys(ADD_ONS).map((key) => {
    return (
      <Checkbox
        key={key}
        propName={key}
        title={ADD_ONS[key][0]}
        descr={ADD_ONS[key][1]}
        price={MON_PRICES[key] * multi}
        info={info}
        setInfo={setInfo}
        toggleBtn={false}
      />
    );
  });

  const addOns = (
    <>
      <h1>Pick your add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      {addOnList}
    </>
  );

  const summary = (
    <>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <Cart
        info={info}
        MON_PRICES={MON_PRICES}
        multi={multi}
        ADD_ONS={ADD_ONS}
      />
    </>
  );

  let displayedStep;

  switch (step) {
    case 1:
      displayedStep = plan;
      break;
    case 2:
      displayedStep = addOns;
      break;
    case 3:
      displayedStep = summary;
      break;
    default:
      displayedStep = userInfo;
  }

  return (
    <>
      <picture>
        <source
          srcSet={bgBarDesktop}
          type="image/svg+xml"
          media="(min-width: 1076px)"
        />
        <img src={bgBarMobile} alt="" />
      </picture>

      <Pagination STEPS={STEPS} />

      <main>
        <form>{displayedStep}</form>
      </main>

      <nav>
        {step > 0 ? (
          <FormBtn
            submit={false}
            forward={false}
            text={'Go Back'}
            step={step}
            setStep={setStep}
          />
        ) : null}
        {step < STEPS ? (
          <FormBtn
            submit={false}
            forward={true}
            text={'Next Step'}
            step={step}
            setStep={setStep}
          />
        ) : (
          <FormBtn submit={true} text={'Confirm'} />
        )}
      </nav>
    </>
  );
}

const root = document.querySelector('#root');
createRoot(root).render(<App />);
