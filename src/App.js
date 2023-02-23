import logo from './logo.svg';
import { useState, useEffect, useRef } from 'react';
import { ReactDOM } from 'react';
import cookie from "./images/Cookie_transparent.png";
import './App.css';
import { motion } from 'framer-motion';
import Particle from './components/Particle';
import './styles.css';
import NavBar from './components/NavBar';
import TableCol from './components/Store/TableCol';



const App = () => {

  //notification handler:
  // console.log(window.Notification.permission);
  

  const initialState = () => Number(window.localStorage.getItem('localCounter')) || 0;
  const initialStateAmount = () => Number(window.localStorage.getItem('amount')) || 1;
  const initialRate = () => Number(window.localStorage.getItem('RatePerSec')) || 0;
  let resetState = false;

  let [counter, setCounter] = useState(initialState);
  let [countAmount, setAmount] = useState(initialStateAmount);
  let [ratePerSec, setRate] = useState(initialRate);




  //this is used to reset the click amount 
  const resetCounter = () => {
    const msg = 'Are you sure you want to reset?';
    if (window.confirm(msg)) {
      window.localStorage.clear();
      // window.localStorage.clear();
      // for(let i = 1; i <= 27; i++){
      //   window.localStorage.clear(`p${i}`);
      // }
      window.localStorage.clear();
      
      setCounter(0);
      setRate(0);
      setAmount(1);
      // setRate(0);
      window.location.reload();
      window.location.reload();
    }
  };





  // alert(countAmount);
  useEffect(() => {
    window.localStorage.setItem('localCounter', Math.round(counter * 100) / 100);
    window.localStorage.setItem('amount', Math.round(countAmount * 100) / 100);
    window.localStorage.setItem('RatePerSec', Math.round(ratePerSec * 100) / 100);
  }, [counter, countAmount, ratePerSec]);




  useEffect(() =>{
    const interval = setInterval(() => {
      setCounter(counter + ratePerSec);
      // localStorage.setItem('localCounter', counter);
    }, 1000);
    return () => clearInterval(interval);
  },[counter, ratePerSec]);
  
  const handleclicker = () => {
    setCounter(counter + countAmount);
    // window.location.reload();
  }
  
  return (
    <div className="App">
      {/* Create NavBar here */}
      <NavBar />

      <div className="box1">

        <h1>{Math.round(counter * 100) / 100}</h1>
        
        <div onClick={
        //   () => {
        //   setCounter(counter + countAmount);
        //   localStorage.setItem('localCounter', ++counter);
        // }

        //pass in parameter where we send to the rate that we also wanna add it 
          ()=>{handleclicker(); }
        
        }>
          <img src={cookie} alt="cookie" id='cookie1' />
          <br />
          <span>Cookie Rate: {Math.round(countAmount * 100) / 100} per click!</span>

          <br />&nbsp;
          <span>{ratePerSec} Cookies Per Second</span>
          <br />&nbsp;
        </div>

        <div>

          <button className='button reset-button' onClick={resetCounter}>Reset Progress</button>

        </div>
      </div>
      <TableCol counter={counter} setCounter={setCounter} countAmount={Math.round(countAmount * 100) / 100} setAmount={setAmount}
        ratePerSec={ratePerSec} setRate={setRate}/>
      
    </div>

  );
}

export default App;
