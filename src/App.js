import React from "react";
import styled from "styled-components";
import "./App.css";
import Btn from "../src/components/Btn";

const SampleButtons = styled.div`
  button {
    margin-right: 10px;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Ripple Button</h3>
        <SampleButtons>
          <Btn bgColor="#ffbe76" color="white" large text="test" />
          <Btn bgColor="#6ab04c" color="white" large />
        </SampleButtons>
      </header>
    </div>
  );
}

export default App;
