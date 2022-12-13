import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import InputText from './components/InputText';
import Checkbox from './components/Checkbox';
import RadioBtn from './components/RadioBtn';
import FormBtn from './components/FormBtn';
import Cart from './components/Cart';
import bgBarDesktop from './images/bg-sidebar-desktop.svg';
import bgBarMobile from './images/bg-sidebar-mobile.svg';
import './index.css';

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
      onlineService: [false, 'Online Service'],
      largerStorage: [false, 'Larger Storage'],
      customProfile: [false, 'Customize Profile'],
    },
  });
  const multi = info.yearly ? YEARLY_MULTI : 1;

  const userInfo = (
    <>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <InputText
        type={'text'}
        label={'Name'}
        placeholder={'e.g. Stephen King'}
      />
      <InputText
        type={'email'}
        label={'Email Address'}
        placeholder={'e.g. stephenking@lorem.com'}
      />
      <InputText
        type={'tel'}
        label={'Phone Numer'}
        placeholder={'e.g. +1 234 567 890'}
      />
    </>
  );

  const plan = (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <RadioBtn
        plan={'Arcade'}
        price={MON_PRICES.arcade * multi}
        info={info}
        setInfo={setInfo}
      />
      <RadioBtn
        plan={'Advanced'}
        price={MON_PRICES.advanced * multi}
        info={info}
        setInfo={setInfo}
      />
      <RadioBtn
        plan={'Pro'}
        price={MON_PRICES.pro * multi}
        info={info}
        setInfo={setInfo}
      />
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

  const addOns = (
    <>
      <h1>Pick your add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <Checkbox
        name={'Online service'}
        label={'Access to multiplayer games'}
        price={MON_PRICES.onlineService * multi}
        info={info}
        setInfo={setInfo}
      />
      <Checkbox
        name={'Larger storage'}
        label={'Extra 1TB of cloud save'}
        price={MON_PRICES.largerStorage * multi}
        info={info}
        setInfo={setInfo}
      />
      <Checkbox
        name={'Customizable Profile'}
        label={'Custom theme on your profile'}
        price={MON_PRICES.customProfile * multi}
        info={info}
        setInfo={setInfo}
      />
    </>
  );

  const summary = (
    <>
      <h1>Finishing up</h1>
      <p>Double-check everything is looks OK before confirming.</p>
      <Cart info={info} MON_PRICES={MON_PRICES} multi={multi} />
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
