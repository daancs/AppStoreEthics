import React, { useState } from 'react';


/**
 * A skeleton for the structure of the flashcard.
 * 
 * @returns the flashcard
 */
export default function Flashcard() {

    // State for flip (true/false)
    const [flip, setFlip] = useState(false);

    // Handle click on the flashcard
    function handleOnClick() {
        setFlip(!flip);
        console.log(flip);
    }

    return (
            <div className='h-[650px] w-[450px] [perspective:1000px] hover:cursor-pointer transition-all ease-in-out duration-500 hover:scale-105'>
                <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${flip ? '[transform:rotateY(180deg)]' : ''}`} onClick={() => handleOnClick()}>
                    <div className='absolute inset-0 h-full w-full rounded-xl shadow-xl bg-slate-100 px-12 text-center text-black'>
                        <div className='flex min-h-full rounded-xl  flex-col items-center justify-center'>
                            <h1>Framsida</h1>
                        </div>                    
                    </div>
                    <div className='absolute inset-0 h-full w-full rounded-xl shadow-xl bg-slate-100 px-12 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                        <div className='flex min-h-full rounded-xl  flex-col items-center justify-center'>
                            <h1>Baksida</h1>
                        </div>
                    </div>
                </div>
            </div>
    );
};