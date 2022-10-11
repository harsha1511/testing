import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import { Style } from './components/style';
import {State} from './components/state'

function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id) => {
        console.log("Button Clicked" , id);
      }} />
      <Style styles={{border: "1px solid black"}}/>
      <input type="text" onChange={(event) => console.log(event.target.value)}/>
      <State />
    </div>
  );
}

export default App;
