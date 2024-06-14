import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Set() {
  const [userName, setUserName] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputMonth, setInputMonth] = useState('');
  const [pass, setPass] = useState('');
  const [isYes, setYes] = useState(false);
  const generate = async() => {
    
    // Prepare the data object to send to the backend
    const data = {
      userName: userName,
      inputDate: inputDate,
      inputMonth: inputMonth,
      pass: pass,
    };
    console.log("Data to be sent:", data);
    // Send the data to the backend
    await axios.post(`https://birthdaybackend.onrender.com/api/send/submit`, data)
      .then(response => {
        if (response.status === 200) {
          setYes(true);
          alert('Registered successfully');
        } else {
          alert('Error submitting data.');
        }
        
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error submitting data.');
      });
      

  };
  if (isYes) {
    return <Navigate to="/login"/>;
  }
  const divstyle ={
    backgroundImage:`url(https://wallpaperaccess.com/full/345214.jpg)`,
    backgroundPosition: 'center',
    backgroundSize:'cover', 
  }

  return (
    <div className="  bg-slate-500 min-w-full min-h-screen flex " style={divstyle}>
      <div className=' m-auto self-center text-xl flex flex-col justify-center gap-4 p-5 px-10 min-w-1.5'>
        
        <div className=' flex justify-between gap-3'>
          <h1 className=' text-white'>Enter the name:</h1>
          <input
            className=' border-r-8 rounded-2xl text-center py-1 text-black'
            type="text"
            placeholder="Enter the name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className=' flex justify-between gap-3'>
          <h1 className=' text-white'>Enter the pass:</h1>
          <input
            className=' border-r-8 rounded-2xl text-center py-1 text-black'
            type="text"
            placeholder="Set the Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        
        <div className=' flex justify-between'>
          <h1 className=' text-white'>Enter the Date:</h1>
          <input
            className=' border-r-8 rounded-2xl text-center py-1 text-black'
            type="number"
            min="1"
            max="31"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
        </div>
        <div className=' flex justify-between'>
          <h1 className=' text-white'>Enter the month:</h1>
          <input
            className=' border-r-8 rounded-2xl text-center py-1 text-black'
            type="number"
            min="1"
            max="12"
            value={inputMonth}
            onChange={(e) => setInputMonth(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={generate}
        className="p-2 px-4 m-2 text-lg bg-black text-white absolute top-3/4 left-1/2 transform -translate-x-1/2 border-2 border-black rounded-xl"
      >
        Generate
      </button>

    </div>
  )
}

export default Set;
