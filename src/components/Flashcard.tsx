import React, { useState } from 'react';

export default function Flashcard() {

    // State for flip
    const [flip, setFlip] = useState(false);

    function handleOnClick() {
        setFlip(!flip);
    }

    return (
            <div className='h-[650px] w-[450px]'>
                <div className={`relative h-full w-full rounded-xl shadow-xl p-4 transition-all ease-in-out delay-100 hover:scale-105 duration-500 hover:cursor-pointer [transform-style:preserve-3d] `} onClick={() => handleOnClick()}>
                    <div className={`absolute inset-0 h-full w-full rounded-xl shadow-xl ${flip ? '[transform:rotateY(180deg)] duration-500' : ''}`}>
                        <div className='flex min-h-full min-w-full rounded-xl flex-col items-center justify-center text-center text-black bg-slate-100'>
                            <h1>Framsida</h1>
                        </div>
                    </div>
                    <div className={`absolute inset-0 h-full w-full rounded-xl shadow-xl [backface-visibility:hidden] ${flip ? '' : '[transform:rotateY(180deg)] duration-500'}`}>
                        <div className='flex min-h-full min-w-full rounded-xl flex-col items-center justify-center text-center text-black bg-slate-100'>
                            <h1>Baksida</h1>
                        </div>
                    </div>
                </div>
            </div>
    );
};




// <div className='group h-[650px] w-[450px] [perspective:1000px]'>
//     <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
//         <div className='absolute inset-0 h-full w-full rounded-xl shadow-xl bg-slate-100 px-12 text-center text-black'>
//             <div className='flex min-h-full rounded-xl flex-col items-center justify-center'>
//                 <h1>Framsida</h1>
//             </div>
                {/* Hur man lägger in en bild */}
                {/* <img className='flex min-h-full rounded-xl flex-col items-center justify-center' src='https://static.posters.cz/image/1300/poster/guardians-of-the-galaxy-groot-i64376.jpg'/> */}
//         </div>
//         <div className='absolute inset-0 h-full w-full rounded-xl shadow-xl bg-slate-100 px-12 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]'>
//             <div className='flex min-h-full rounded-xl  flex-col items-center justify-center'>
//                 <h1>Baksida</h1>
//             </div>
//         </div>
//     </div>
// </div>

