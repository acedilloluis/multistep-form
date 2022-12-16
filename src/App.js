import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Pagination from './components/Pagination';
import InputText from './components/InputText';
import Checkbox from './components/Checkbox';
import RadioBtn from './components/RadioBtn';
import Cart from './components/Cart';
import Form from './components/Form';
import bgBarDesktop from './images/bg-sidebar-desktop.svg';
import bgBarMobile from './images/bg-sidebar-mobile.svg';
import arcadeIcon from './images/icon-arcade.svg';
import advancedIcon from './images/icon-advanced.svg';
import proIcon from './images/icon-pro.svg';
import thankUIcon from './images/icon-thank-you.svg';
import './index.css';
import YearlyToggle from './components/YearlyToggle';

// Add array for each entry in STEPS containing: pagination title, form title, form paragraph
// First entry is considered the first step, the second entry the second step, etc.
const STEPS = {
  info: 'Your Info',
  plan: 'Select Plan',
  addOns: 'Add-ons',
  summary: 'Summary',
};
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

function App() {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Arcade',
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
    <Form
      id="step-1"
      title="Personal Info"
      para="Please provide your name, email address, and phone number."
      list={inputList}
      step={step}
      setStep={setStep}
    />
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
  planList.push(<YearlyToggle key="toggle" info={info} setInfo={setInfo} />);

  const plan = (
    <Form
      id="style-2"
      title="Select Your Plan"
      para="You have the option of monthly or yearly billing."
      list={planList}
      step={step}
      setStep={setStep}
      info={info}
      setInfo={setInfo}
    />
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
    <Form
      id="step-3"
      title="Pick your add-ons"
      para="Add-ons help enhance your gaming experience."
      list={addOnList}
      step={step}
      setStep={setStep}
    />
  );

  const cart = (
    <Cart info={info} MON_PRICES={MON_PRICES} multi={multi} ADD_ONS={ADD_ONS} />
  );

  const summary = (
    <Form
      id="step-4"
      title="Finishing Up"
      para="Double-check everything looks OK before confirming."
      list={cart}
      step={step}
      setStep={setStep}
    />
  );

  const thankU = (
    <>
      <img src={thankUIcon} alt="" />
      <h2>Thank You!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </>
  );

  let displayedStep;

  switch (step) {
    case 1:
      displayedStep = userInfo;
      break;
    case 2:
      displayedStep = plan;
      break;
    case 3:
      displayedStep = addOns;
      break;
    case 4:
      displayedStep = summary;
      break;
    default:
      displayedStep = thankU;
  }

  return (
    <>
      <picture>
        <source
          srcSet={bgBarDesktop}
          type="image/svg+xml"
          media="(min-width: 1076px)"
        />
        <img
          src={bgBarMobile}
          alt=""
          className="h-auto max-w-full object-top"
        />
      </picture>

      <Pagination STEPS={STEPS} step={step} />

      <main>{displayedStep}</main>
    </>
  );
}

const root = document.querySelector('#root');
createRoot(root).render(<App />);
