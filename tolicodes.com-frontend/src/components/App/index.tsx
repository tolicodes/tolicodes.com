import React from "react";

import { GSBase } from "../../styles/global-styles";

import { Header, Section, PortfolioList } from "../../components";

function App() {
  return (
    <>
      <GSBase />
      <Header />
      <Section title="Portfolio">
        <PortfolioList />
      </Section>
    </>
  );
}

export default App;
