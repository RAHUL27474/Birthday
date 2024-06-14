import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function Start (){
    const [isYes, setYes] = useState(false);
    const [isNo, setNo] = useState(false);
    const [date, setDate] = useState();
    const [month, setMonth] = useState();
    useEffect(() => {
      axios.get(`https://birthdaybackend.onrender.com/api/get/data`)
        .then((response) => {
          console.log("Accessing https://birthdaybackend.onrender.com/api/get/data" )
          setDate(response.data.inputDate);
          setMonth(response.data.inputMonth);
          console.log(response.data)
        })
        .catch((error) => {
          console.log("Error in fetching data", error);
        });
    }, []);
    const divstyle = {
        backgroundImage:`url(https://tse3.mm.bing.net/th/id/OIP.NYJwoPEd7Gjpa3WEJN19lQAAAA?rs=1&pid=ImgDetMain)`,
        backgroundPosition: 'center',
    }
    const matchYes = () =>{
        setYes(true);
    }
    const matchNo = () =>{
        setNo(true);
    }
    if (isYes) {
        return <Navigate to="/envelope"/>;
      }
    if(isNo){
        setNo(false);
        alert("Comeback on the right day!")
    }
  return (
    <div style={divstyle} className=' bg-lime-500 w-screen h-screen flex flex-col justify-center'>
      <div className=' flex justify-center'>
        <div className=' text-3xl'>
            <h1>Is it {`${date}`}<sup>th</sup> of {`${month}`}?</h1>
            <div className=' flex justify-around'>
                <button onClick={matchYes} className=' bg-black text-white px-6 py-2 rounded-full'>Yes</button>
                <button onClick={matchNo} className=' bg-black text-white px-6 py-2 rounded-full'>No</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Start
