import React, { useEffect, useState } from 'react';
// import { preview } from 'vite';

const First = () => {

    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [milisecond,setmilisecond]=useState(0);
    const [check, setCheck] = useState(false);
  
    useEffect(() => {
      let timerId;
  
      if (check) {
        timerId = setTimeout(() => {
          start();

          if(milisecond===16){
            setmilisecond(0);
            setSecond((prevSecond)=> prevSecond+1);

          }
  
          if (second === 59) {
            setSecond(0);
            setMinute((prevMinute) => prevMinute + 1);
          }
  
          if (minute === 59 && second === 59) {
            setMinute(0);
            setHour((prevHour) => prevHour + 1);
          }
  
          if (hour === 23 && minute === 59 && second === 59) {
            setHour(0);
            setDay((prevDay) => prevDay + 1);
          }
        }, 62.5);
      }
  
      // Cleanup function to clear the timeout when the component is unmounted or when check becomes false
      return () => {
        clearTimeout(timerId);
      };
    }, [check,milisecond, second, minute, hour, day]);
  
    const start = () => {
      setCheck(true);
      setmilisecond((prevSecond) => prevSecond + 1);
    };
  
    const stop = () => {
      setCheck(false);
    };

    const reset=()=>{
        setmilisecond(0);
        setSecond(0);
        setMinute(0);
        setHour(0);
        setDay(0);
        setCheck(false);
    }

    return (
        <div className='m-0 p-0 flex w-full h-screen justify-center items-center flex-col' >

               <h2 className='text-3xl border-x-stone-800 border-solid border-2  rounded-2xl p-4 m-4'>Stopwatch  </h2> 

                <div className='w-1/2 h-1/2 flex justify-center items-end'>

                        <div className='w-32 h-32 p-12 border-8 bg-black border-black border-solid  rounded-full flex  justify-center items-center'>

                               <h2 className="text-8xl text-white" >{day}</h2>

                        </div>

                        <h2>Day</h2>

                        <div className='w-32 h-32 p-16 border-2 bg-black border-black border-solid  rounded-full flex  justify-center items-center'>

                             <h2 className="text-8xl text-white" >{hour}</h2>

                        </div>
                        <h2>Hours</h2>
                       
                        <div className='w-32 h-32  p-16 border-2 bg-black border-black border-solid  rounded-full flex  justify-center items-center'>

                        <h2 className="text-8xl text-white" >{minute}</h2>

                        </div>
                        <h2>Minutes</h2>
                        
                        <div className='w-32 h-32 p-16 border-2 bg-black border-black border-solid  rounded-full flex  justify-center items-center'>

                        <h2 className="text-8xl text-white" >{second}</h2>
  
                        </div>
                        <h2>Seconds</h2>
                        <div className='w-32 h-32 p-16 border-2 bg-black border-black border-solid  rounded-full flex  justify-center items-center'>

                        <h2 className="text-8xl text-white" >{milisecond}</h2>

                         </div>

                         <h2>miniSeconds</h2>
    

                       


                       

                </div>
                  {/* button div */}
                <div className='w-1/2 h-screen mt-12 flex justify-center items-start'>

                      
                     <button className="cursor-pointer mr-4 text-white font-bold shadow-md hover:scale-[1.2] shadow-green-400 rounded-full px-5 py-2 bg-gradient-to-bl from-green-500 to-green-800"
                        onClick={start}  >
                      Start
                     </button>
                     <button className="cursor-pointer mr-4 text-white font-bold shadow-md hover:scale-[1.2] shadow-red-400 rounded-full px-5 py-2 bg-gradient-to-bl from-red-500 to-red-800"
                        onClick={stop}>
                      Stop
                     </button>
                     <button className="cursor-pointer mr-4 text-white font-bold shadow-md hover:scale-[1.2] shadow-sky-400 rounded-full px-5 py-2 bg-gradient-to-bl from-sky-500 to-sky-800"
                      onClick={reset}>
                      Reset
                     </button>
                    
  
                       

                </div>
        </div>
    );
}

export default First;
