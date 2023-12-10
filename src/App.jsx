import React, { useCallback, useEffect, useState } from 'react';
import './App.css'


function App() {
  const[length,setlength]=useState(8);
  const [value,setvalue]=useState('ewebjjbj');
  const[number,setnumber]=useState(false);
  const[Symbols,setsymbols]=useState(false);
  
  // const[password,setpassword]=useState(value);



  const generate= useCallback(()=>{

        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm";

        if(number) str+="1234567890";
        if(Symbols)  str+="!@#$%^&*";

   let a='';
   let pass='';
      

         for(let i=1;i<=length;i++){
          a=Math.floor(Math.random()*str.length);

          pass+=str[a];


          

           
         }
       
 
        

       setvalue(pass);

  },[length,number,Symbols]);

  useEffect((()=>{
    generate();
  }),[length,number,Symbols])

  
  const copiedtoclip=useCallback(()=>{
   window.navigator.clipboard.writeText(value);
  },[value]);

  return (
    <>
        <h2 className='text-black text-3xl font-sans font-bold'>Password Generator </h2>
        
     <div className='flex justify-center'>
         

        <div className='bg-black w-1/2 p-6 rounded-2xl'>

               <div>
                <input className='p-2 w-10/12 rounded-l-lg' type="text" placeholder='Create password' value={value}readOnly/>
                <button className='text-white p-2 rounded-r-lg bg-blue-600 active:bg-green-500' onClick={copiedtoclip}>Copy</button>

                </div>

                <div className='flex flex-wrap mt-4 justify-center'>
                   <input type="range" name="click" id="okey"  min="6" max="20" className='mt-2' value={length}  onChange={(e)=>setlength(e.target.value)}/>
                    <h3 className='text-white ml-8'> Length[{length}]</h3>
                    <h3 className='text-white ml-4'>Numerical</h3>
                    <input type="checkbox" className='ml-4' name="click" id="check1" defaultChecked={number} onChange={()=>{ setnumber((prev)=>!prev);}}  />
                    <h3 className='text-white ml-4'>Character</h3>
                    <input  className='ml-2' type="checkbox" name="click" id="check1" defaultChecked={Symbols} onChange={()=>{setsymbols((prev)=>!prev);}} />




                </div>



        </div>

     </div>

     <p className='text-blue-400'> reference ' chai aur code '</p>
        
    </>
  )
}

export default App;
