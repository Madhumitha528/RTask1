import {useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {

  const [time, setTime] = useState('');
  const [showTime, setShowTime] = useState(false);

  function handlesClick()
  {
    setTime(new Date().toLocaleTimeString());
    setShowTime(true);

    setTimeout(() => {
      setShowTime(false);
    }, 1000);
    setTimeout(() => {
      setShowTime(true);
    }, 10000);
  }
  return (
    <div className="m-4 ">
      <Header/> 
      <hr className='bg-lightgrey px-0'/> 
      <Main/>
      <div className='mx-5 px-5'>
        <button onClick={handlesClick}>Show Time</button> 
        {showTime && <p>{time}</p> }
     </div>
    </div>
  );
}
export default App;
