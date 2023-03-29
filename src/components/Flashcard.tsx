import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import mySpyImage from 'src/images/mySpy.png';

// interface idea of later usage
interface FlashcardProps {
    title?: string;
    image?: StaticImageData;
    width?: string;
    height?: string;
    description?: string;
}

// example app to get the idea of the layout
const mySpyApp = {
    title: 'mySpy Tracker App',
    image: mySpyImage,
    description: "\u2022 Check the real time GPS location of their beloved ones\n \u2022 Get detailed past locations history for 3 month back\n \u2022 See their beloved one\'s contact list\n \u2022 Send an alarm to your beloved one\'s phone if needed"
}

/**
 * A skeleton for the structure of the flashcard.
 * 
 * @returns a flashcard
 */
export default function Flashcard(props: FlashcardProps) {

    // State for flip (true/false)
    const [flip, setFlip] = useState(false);

    // Handle click on the flashcard
    function handleOnClick() {
        setFlip(!flip);
    }

    return (
            <div className='h-[60vh] w-[25vw] min-h-[60vh] min-w-[400px] [perspective:1000px] hover:cursor-pointer transition-all ease-in-out duration-500 hover:scale-105'>
                <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${flip ? '[transform:rotateY(180deg)]' : ''}`} onClick={() => handleOnClick()}>
                    <div className={`relative inset-0 rounded-xl shadow-xl bg-slate-100 [backface-visibility:hidden]`}>
                        <div className={`flex items-center justify-center`}>
                            <Image src={mySpyImage ?? 'App Picture'} alt='App Picture not found' className={`rounded-xl ${props.width ? props.width : 'w-[300px]'} ${props.height ? props.height : 'h-[60vh]'} max-h-full min-h-full`}/>
                        </div>              
                    </div>
                    <div className='absolute inset-0 h-full w-full rounded-xl shadow-xl bg-slate-100 px-10 text-black [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                        <div className='flex flex-col rounded-xl'>
                            <div className='text-2xl py-6 text-center'>
                                {mySpyApp.title}
                            </div>
                            <span className='text-base'>
                                Users of this app can:
                                <div className='whitespace-pre-line h-fit px-4 text-sm py-2'>
                                    {mySpyApp.description}
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    );
};