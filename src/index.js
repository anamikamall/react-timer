import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date();
currDate = currDate.getHours();
let greet='';
const cssStyle = {};

if (currDate >= 1 && currDate <12){
  greet = "Good Morning 🌅"; //window + '.' for emoji
  cssStyle.color = 'green';
  document.title = 'Greet . Morning'; //changing title of page
}
else if (currDate>=12 && currDate <19){
  greet = "Good Afternoon 🌇";
  cssStyle.color = 'orange';
  document.title = 'Greet . Afternoon';
}
else {
  greet = "Good Night 🌙";
  cssStyle.color = 'black';
  //will change title in tik tok form
  setInterval(() =>{  
  document.title = 'Greet . Good';
  },2000);
  setInterval(() =>{
  document.title = 'Greet . Night';
  },1500);
  // document.title = 'Greet . Night';
}

ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir, <span style={cssStyle}>{greet}</span> </h1>
  </div>
  </>,
  document.getElementById('root')
);