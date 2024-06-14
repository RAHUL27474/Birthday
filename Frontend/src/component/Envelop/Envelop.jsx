import React, { useEffect, useState } from 'react'
import './Envelope.css'
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Envelop = () => {
    const [name, setName] = useState()
    const [backgroundImage, setBackgroundImage] = useState('https://wallpapercave.com/wp/wp6438851.jpg');
    const [change, setChange] = useState(false);
    const [isClickMeVisible, setClickMeVisible] = useState(false);
    const [goWish, setGoWish]= useState(false);
    useEffect(() => {
      axios.get(`https://birthdaybackend.onrender.com/api/get/data`)
        .then((response) => {
          setName(response.data.userName);
          console.log(response)
        })
        .catch((error) => {
          console.log("Error in fetching data", error);
        });
    }, []);

    // useEffect(() => {
    //     // Set the background image dynamically, e.g., from an API or based on a condition
    //     setBackgroundImage('https://static.vecteezy.com/system/resources/previews/004/548/332/original/glossy-happy-birthday-balloons-background-illustration-free-vector.jpg');
    //   }, []);
    
      function gotoWish(){
        setGoWish(true);
      }
      if(goWish){
        return <Navigate to="/wish"/>;
      }
      function Changes(){
        const envelope = document.querySelector('.envelope-wrapper');   
                    
                            envelope.classList.toggle('flap');
                            if(change === false){
                              setChange(true);
                              setBackgroundImage('https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Photos-Light-Blue-Backgrounds.jpg');
                            }else{
                              setChange(false);
                              setTimeout(() => setBackgroundImage('https://wallpapercave.com/wp/wp6438851.jpg'), 1000);
                              

                            }
                            setTimeout(() =>setClickMeVisible(true) , 2500);
                            
                      //       if (backgroundImage === null) {
                      //   // setBackgroundImage('https://static.vecteezy.com/system/resources/previews/004/548/332/original/glossy-happy-birthday-balloons-background-illustration-free-vector.jpg');
                      //   setBackgroundImage('https://tse4.mm.bing.net/th/id/OIP.USOWJoCy_MXmoc5RoOuJBAHaNK?rs=1&pid=ImgDetMain');
                      //   console.log("Image appeared")
                      // } else {
                      //   setTimeout(() => setBackgroundImage(null), 1000);
                      //   console.log("Image removed")
                      // };
                    
      }
      const letterStyle ={
        backgroundImage: `url(https://th.bing.com/th/id/OIP.nW8OyX_zQ5ndTpAejjL8wAHaEK?rs=1&pid=ImgDetMain)`,
        backgroundPosition: 'center',
      }
      const divStyle = {
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      //   height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      //   transition: 'backgroundImage 2s ease-in-out 0.5s', 
      };
  return (
    <div style={divStyle} className=' body m-0 p-0 box-border bg-emerald-900 flex align-middle justify-center w-screen h-screen'>
    <div className='container h-screen grid content-center justify-center'>
        <div className=' envelope-wrapper bg-slate-100 content-center'>
            <div className=' envelope relative'onClick={()=>Changes()}>
                <div className=' letter' style={letterStyle}>
                    <div className=' text relative'><strong>Dear {`${name}`}</strong>
                    <h1>There is something for you</h1></div>
                </div>
            </div>
            <div className=' heart' onClick={()=>Changes()}>

            </div>
        </div>
        {isClickMeVisible && (
        <button onClick={gotoWish} className="  p-2 px-4 m-2 text-lg bg-black text-white absolute top-3/4 left-1/2 transform -translate-x-1/2 border-2 border-black rounded-xl">
          Its here
        </button>
      )}
    </div></div>
    
  )
}   

export default Envelop
