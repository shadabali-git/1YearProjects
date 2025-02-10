import React, { useState } from 'react';
import { XMark } from './X';
import { OMark } from './O';

export const Box = () => {
    const [player, setPlayer] = useState(0);
    const [winnerDiv,setwinnerDiv]=useState('hidden');
    const [tablayout,settablayout]=useState('hidden');
    const [count,setcount]=useState(0);
    const [draw,setdraw]=useState(false);
    const [score1,setscore1]=useState(0);
    const [score2,setscore2]=useState(0);

    const [board, setBoard] = useState([
        { id: 0, value: "empty", clicked: false },
        { id: 1, value: "empty", clicked: false },
        { id: 2, value: "empty", clicked: false },
        { id: 3, value: "empty", clicked: false },
        { id: 4, value: "empty", clicked: false },
        { id: 5, value: "empty", clicked: false },
        { id: 6, value: "empty", clicked: false },
        { id: 7, value: "empty", clicked: false },
        { id: 8, value: "empty", clicked: false },
    ]);
   
    const handleClick = (index) => {
 
           setcount(count+1);
        // console.log(count)
        
    
         
         player===0?setPlayer(1):setPlayer(0);
        
        let found = board.find((elm) => elm.id === index);
        if (found){
            
            if(found.value!="empty"){
                return;
            }
            if(player===0){
            found.value = "one";
            }
            else if(player===1){
        found.value= "two";
            }
            setBoard([...board]);
            check() // Update the state with the modified board array
        }

       
    };


    const Reset_Box= () =>{
              setdraw(false);
              setwinnerDiv('hidden');
              settablayout('hidden');
              setcount(0);
              setscore1(0);
              setscore2(0);
                
              const newBoard = board.map((item, index) => ({
                ...item,
                   value:board.value="empty",
            }));

              setBoard(newBoard);
              
    }

   




    function check(){

         
         let found0 =board.find((elm)=> elm.id===0);
         let found1 =board.find((elm)=> elm.id===1);
         let found2 =board.find((elm)=> elm.id===2);
         let found3 =board.find((elm)=> elm.id===3);
         let found4 =board.find((elm)=> elm.id===4);
         let found5 =board.find((elm)=> elm.id===5);
         let found6 =board.find((elm)=> elm.id===6);
         let found7 =board.find((elm)=> elm.id===7);
         let found8 =board.find((elm)=> elm.id===8);

         


         if((found0.value=== "one" && found1.value === "one" && found2.value=== "one")|| 
            (found3.value=== "one" && found4.value === "one"  && found5.value=== "one")||
            (found6.value=== "one" && found7.value === "one" && found8.value=== "one")||

            (found0.value=== "one" && found3.value === "one" && found6.value==="one") ||
            (found1.value=== "one" && found4.value === "one" && found7.value==="one") || 
            (found2.value=== "one" && found5.value === "one" && found8.value==="one") ||

            (found0.value=== "one" && found4.value === "one" && found8.value==="one")||
            (found2.value=== "one" && found4.value === "one" && found6.value==="one") ){

                    // document.getElementById("div_win").classList.remove('hidden');
                    // document.getElementById("div_win").classList.add('absolute');
                     setwinnerDiv('absolute')
                     settablayout('absolute');
                    //  console.log("x win")

                    setscore2(score2+1);
                  

                    
                   
        }

        else if((found0.value=== "two" && found1.value === "two" && found2.value=== "two")|| 
        (found3.value=== "two" && found4.value === "two"  && found5.value=== "two")||
        (found6.value=== "two" && found7.value === "two" && found8.value=== "two")||

        (found0.value=== "two" && found3.value === "two" && found6.value==="two") ||
        (found1.value=== "two" && found4.value === "two" && found7.value==="two") || 
        (found2.value=== "two" && found5.value === "two" && found8.value==="two") ||

        (found0.value=== "two" && found4.value === "two" && found8.value==="two")||
        (found2.value=== "two" && found4.value === "two" && found6.value==="two") ){
        
                
            setwinnerDiv('absolute');
            settablayout('absolute');
            setscore1(score1+1);

            // console.log("o win")

                
               
    }
    else{

        if(count==8){

            setdraw(true);
            setwinnerDiv('absolute');
            settablayout('absolute');
  
          }
            


    }

   

         
         

         
    }

   const Again=()=>{
            
    setdraw(false);
    setwinnerDiv('hidden');
    settablayout('hidden');
    setcount(0);
    
      
    const newBoard = board.map((item, index) => ({
      ...item,
         value:board.value="empty",
  }));

    setBoard(newBoard);
        
     

   }
    return (
        <div className='w-screen h-screen flex justify-center items-center'>

{/* tab layout  */}
    <div className={`w-screen h-screen ${tablayout} bg-gray-900 opacity-25`}>

    </div>

{/* winning div after anyone win */}

    <div id="div_win" className={`${winnerDiv} ${player=== 0?'bg-red-400':'bg-blue-400'} ${draw?'bg-green-400':''} md:top-4 border border-slate-200 flex flex-col rounded-2xl md:p-4 text-sm z-50`} style={{width:"50%",height:"20%"}}>
            
            
      

         <h1 className="text-center text-slate-200 md:text-xl text-sm font-bold m-2 font-pop">{`${ draw?"Draw game":`${player===0?"Red":"Blue"} Win The Game`}`}</h1>
        


    <div className='flex justify-around' >
    
       <button onClick={Again} className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-green-200 focus:bg-green-400 border border-slate-200">  

        <div>Play Again</div>

       </button>
   

        <button onClick={Reset_Box} className="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-green-200 focus:bg-green-400">
            <div>New Game</div>
        </button>

    </div>



                    

</div>

            <div className='absolute top-10 left-10'>
                <h2 className='w-24 h-20 bg-red-600 p-2 bg-opacity-70 rounded-xl font-bold font-serif text-zinc-900 flex flex-col justify-center items-center'> <img src="./Images/O.png" alt="" style={{width:"50%",height:"50%"}}/> <p>Player 1</p>   </h2>
            </div>
            <div className='absolute top-10 right-10'>
                <h2 className='w-24 h-20 bg-blue-800 p-2 bg-opacity-70 rounded-xl font-bold font-serif text-zinc-900 flex flex-col justify-center items-center'> <img src="./Images/X.png" alt="" style={{width:"50%",height:"50%"}}/> <p>Player 2</p>    </h2>
            </div>


{/* main board  */}

            <div className='md:w-96 md:h-96 bg-green-200 grid grid-cols-3 justify-items-center  items-center'>
                {board.map((cell, index) => (
                    <div
                        key={index} // Add key prop with unique value
                        className='m-1 bg-blue-200 w-28 h-28 flex justify-center items-center cursor-pointer'
                        onClick={() => handleClick(index)}>
                        {cell.value === "empty" ? <></> : cell.value === "one" ? <XMark /> : <OMark />}
                    </div>
                ))}
            </div>
        </div>
    );
};
