import React from 'react';
import './App.css';
import MeterFormContainer from './components/MeterFormContainer'
import store from "./store";
// import MeterDisplay from './components/MeterDisplay'

function App() {
  return (
    <div>
    <MeterFormContainer/>
    {/* <MeterDisplay/> */}
    </div>
  );
}

export default App;
