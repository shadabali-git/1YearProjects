import React from 'react';
import Box from './Box';

const Background = () => {
    return (
        <div className='m-0 p-0 overflow-hidden w-screen h-screen bg-gradient-to-r bg-yellow-50 to-white flex justify-center items-center flex-col gap-16'>
            <h2 className='font-google1 text-4xl text-sky-500 hover:animate-bounce transition-all duration:700 ease-in-out cursor-pointer'>  Typing Text </h2>
            <Box />
        </div>
    );
}

export default Background;
