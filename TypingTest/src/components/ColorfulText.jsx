import React, { useEffect, useRef, useState } from 'react';

const ColorfulText = ({ letters }) => {
  const audioRef = useRef(null);
  const [cursorPos, setCursorPos] = useState(0);
  const [color, setColor] = useState(letters.map(_ => 'black'));

  useEffect(() => {
    setColor(prev => {
      const newColor = [...prev];
      newColor[cursorPos] = '#000000';
      return newColor;
    });
  }, [cursorPos]);







  const detect = (e) => {
    
    if(cursorPos===letters.length){
      alert("Congratulations! You have completed the typing test");
  
      

      return;
    }
    if(e.key==="Control" || e.key==="Alt" || e.key==="Shift" || e.key==="CapsLock" || e.key==="Tab" || e.key==="Enter" || e.key==="ArrowLeft" || e.key==="ArrowRight" || e.key==="ArrowUp" || e.key==="ArrowDown" || e.key==="Meta" || e.key==="Escape" || e.key==="PageUp" || e.key==="PageDown" || e.key==="End" || e.key==="Home" || e.key==="Insert" || e.key==="Delete" || e.key==="F1" || e.key==="F2" || e.key==="F3" || e.key==="F4" || e.key==="F5" || e.key==="F6" || e.key==="F7" || e.key==="F8" || e.key==="F9" || e.key==="F10" || e.key==="F11" || e.key==="F12" || e.key==="ScrollLock" || e.key==="Pause" || e.key==="ContextMenu" || e.key==="PrintScreen" || e.key==="NumLock" || e.key==="Clear" || e.key==="MediaPlayPause" || e.key==="MediaStop" || e.key==="MediaTrackNext" || e.key==="MediaTrackPrevious" || e.key==="MediaFastForward" || e.key==="MediaRewind" || e.key==="MediaRecord" || e.key==="MediaEject" || e.key==="MediaVolumeUp" || e.key==="MediaVolumeDown" || e.key==="MediaVolumeMute" || e.key==="MediaPlay" || e.key==="MediaPause" || e.key==="MediaSelect" || e.key==="MediaLast" || e.key==="BrowserBack" || e.key==="BrowserForward" || e.key==="BrowserRefresh" || e.key==="BrowserStop" || e.key==="BrowserSearch" || e.key==="BrowserFavorites" || e.key==="BrowserHome" || e.key==="VolumeMute" || e.key==="VolumeDown" || e.key==="VolumeUp" || e.key==="LaunchApp1" || e.key==="LaunchApp2" || e.key==="LaunchMail" || e.key==="LaunchMediaSelect" || e.key==="LaunchMusicPlayer" || e.key==="LaunchApplication1"){
     
      return;

    
    }
    
      if (e.key === "Backspace" || e.key === "Delete") {
      setCursorPos(prev => {
        return prev > 0 ? prev - 1 : 0;
      })
      
    }
   else {

      setColor(prev => {
        const newColor = [...prev];
        if (letters[cursorPos] === e.key) {
          newColor[cursorPos] = '#5BBED2';
        } else {
          newColor[cursorPos] = '#FF0000';
        }
        return newColor;
      });
      setCursorPos(prev => prev + 1);
     
      
    
    }

    // console.log(cursorPos);
    


    if (e.ctrlKey || e.altKey) {
    }
    else {
      audioRef.current.play();
    }
  }

  // window.addEventListener('keydown', detect);

  return (

    <>
   <div tabIndex="0" className=''>
 
      <audio ref={audioRef} controls={true} className='hidden'>
        <source src="/Audio1.mp3" type="audio/mpeg" />

      </audio>

      {letters.map((letter, index) => (
        <div className='inline text-3xl font-serif text-justify leading-10 underline text-pretty' key={index} style={{ color: color[index] }} >
          {letter}
        </div>
      ))}
    </div>

    <button onKeyDown={detect} type="button" className="fixed bottom-10 right-1/2 text-gray-900 bg-gradient-to-r
 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br
 focus:ring-4 focus:outline-none focus:ring-lime-300
  dark:focus:ring-lime-800 font-medium rounded-lg 
  text-sm px-5 py-2.5 text-center me-2 mb-2"> Start </button>
  </>
  );
}

export default ColorfulText;
