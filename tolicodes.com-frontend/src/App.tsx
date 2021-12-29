import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SiteName } from './components/Header/SiteName';

function App() {
  return (
    <>
      <SiteName siteLogoSrc={'Logo Goes Here'} siteTagline={'Anatoliy D. Zaslavskiy'} />
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
