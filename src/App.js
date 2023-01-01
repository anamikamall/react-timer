import React, { useState } from 'react';
import './App.css';

const App = () => {
  // const state = useState();
  //for Get Time Button Section
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    let newcTime = new Date().toLocaleTimeString();;
    setCtime(newcTime);
  };

  //for Digital Clock Section 
  let time = new Date().toLocaleTimeString();
  const [dtime, setDtime] = useState(time);
  const DigitalTime = () => {
    time = new Date().toLocaleTimeString();;
    setDtime(time);
  };
  setInterval(DigitalTime,1000);

   return(
    <div className='screen'>
    <div className='digClk'>
    <p style={{color: 'red'}}>Digital Clock</p>
    <h1>{dtime}</h1>
    </div>
    <h1>{ctime}</h1>
    <button onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
