import React from 'react';

export default function Flashcard() {

    return (
            <div className='group h-[650px] w-[450px] [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                    <div className='absolute inset-0 h-full w-full rounded-xl shadow-xl bg-slate-100 px-12 text-center text-black'>
                        <div className='flex min-h-full rounded-xl flex-col items-center justify-center'>
                            <h1>Framsida</h1>
                        </div>
                        {/* <img className='flex min-h-full rounded-xl flex-col items-center justify-center' src='https://static.posters.cz/image/1300/poster/guardians-of-the-galaxy-groot-i64376.jpg'/> */}
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