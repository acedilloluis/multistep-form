import React from 'react';
import { createRoot } from 'react-dom/client';
import bgBarDesktop from '../images/bg-sidebar-desktop.svg';
import bgBarMobile from '../images/bg-sidebar-mobile.svg';
import './index.css';

function App() {
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
    </>
  );
}

const root = document.querySelector('#root');
createRoot(root).render(<App />);
