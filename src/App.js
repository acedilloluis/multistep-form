import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Pagination from './components/Pagination';
import InputText from './components/InputText';
import Checkbox from './components/Checkbox';
import RadioBtn from './components/RadioBtn';
import Cart from './components/Cart';
import Form from './components/Form';
import YearlyToggle from './components/YearlyToggle';
import bgBarDesktop from './images/bg-sidebar-desktop.svg';
import bgBarMobile from './images/bg-sidebar-mobile.svg';
import arcadeIcon from './images/icon-arcade.svg';
import advancedIcon from './images/icon-advanced.svg';
import proIcon from './images/icon-pro.svg';
import thankUIcon from './images/icon-thank-you.svg';
import './index.css';

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

  const paginationList = Object.keys(STEPS).map((key, index) => {
    return (
      <Pagination key={key} title={STEPS[key]} step={step} index={index} />
    );
  });

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
  const planContainer = (
    <div className="md:grid md:grid-cols-3 md:gap-x-1">{planList}</div>
  );

  const plan = (
    <Form
      id="style-2"
      title="Select Your Plan"
      para="You have the option of monthly or yearly billing."
      list={planContainer}
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
    <Cart
      info={info}
      MON_PRICES={MON_PRICES}
      multi={multi}
      ADD_ONS={ADD_ONS}
      setStep={setStep}
    />
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
    <div className="absolute top-[15%] mx-4 flex h-min flex-col items-center justify-center rounded-md bg-white px-6 py-12 text-center font-sans sm:static">
      <img src={thankUIcon} alt="" className="mb-2" />
      <h2 className="text-xl font-bold text-marine-blue">Thank You!</h2>
      <p className="text-base font-medium text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
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
          media="(min-width: 640px)"
        />
        <img
          src={bgBarMobile}
          alt=""
          className="h-auto max-w-full object-top sm:h-full sm:basis-1/5 sm:rounded-md sm:object-cover sm:object-center"
        />
      </picture>

      <ol className="absolute top-[5%] flex w-full items-center justify-center sm:left-8 sm:top-8 sm:w-max sm:flex-col sm:items-start">
        {paginationList}
      </ol>

      <main className="sm:basis-4/5">{displayedStep}</main>
    </>
  );
}

const root = document.querySelector('#root');
createRoot(root).render(<App />);
