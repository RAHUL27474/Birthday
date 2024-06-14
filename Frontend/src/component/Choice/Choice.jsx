import React from 'react'
import { useState , useEffect} from 'react';
import { Navigate } from 'react-router-dom';

function Choice () {
    const [regiter, setRegister] = useState(false);
    const [login, setLogin] = useState(false);
    
    const divstyle ={
      backgroundImage:`url(https://wallpaperaccess.com/full/345214.jpg)`,
      backgroundPosition: 'center',
      backgroundSize:'cover', 
    }
    function gotoLogin(){
        setLogin(true)
    }
    function gotoRegister(){
        setRegister(true)
    }
    if (regiter) {
      return <Navigate to="/generate"/>;
    }
    if(login){
      return <Navigate to="/login"/>; 
    }
  
    return (
      <div className="  bg-slate-500 min-w-full min-h-screen flex " style={divstyle}>
        <div className=' m-auto self-center text-xl flex flex-col justify-center gap-4'>
            <h1 className=' text-2xl text-center text-white'>Wanna wish someone?</h1>
            <div className=' flex flex-col gap-2'>
            <button onClick={gotoRegister} className=' bg-gray-950 text-white rounded-3xl w-full py-2 px-2'>Yes, sure</button> 
            <button onClick={gotoLogin} className=' bg-gray-950 text-white rounded-3xl w-full py-2'>Its for me</button>
            </div>
        </div>
     </div>
    )
}

export default Choice
