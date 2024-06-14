import React, { useEffect, useState } from 'react'

const Wperson = () => {
    
   

    const divstyle ={
    backgroundImage:`url(https://wallpaperaccess.com/full/5113076.jpg)`,
  }
  return (
    <div style={divstyle} className=' bg-lime-500 w-screen h-screen flex flex-col justify-center'>
      <div className=' flex justify-center'>
        <div className=' text-3xl'>
            <h1>This is not for you!!</h1>
        </div>
      </div>
    </div>
  )
}

export default Wperson
