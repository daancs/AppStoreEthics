import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import mySpyImage from 'src/images/mySpy.png';
import { IApp } from '@/backend/content/IApp';

// interface idea of later usage
interface FlashcardProps {
    title?: string;
    image?: StaticImageData;
    width?: string;
    height?: string;
    description?: string;
    appData: IApp;
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

    const currentApp = props.appData;

    return (
            <div className='h-[60vh] w-[25vw] min-h-[60vh] min-w-[400px] [perspective:1000px] hover:cursor-pointer transition-all ease-in-out duration-500 hover:scale-105'>
                <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${flip ? '[transform:rotateY(180deg)]' : ''}`} onClick={() => handleOnClick()}>
                    <div className={`relative inset-0 rounded-xl shadow-xl bg-slate-100 [backface-visibility:hidden]`}>
                        <div className={`flex items-center justify-center`}>
                            <Image src={`/img/${currentApp?.image_name}`} width={100} height={100} alt={currentApp?.image_alt ?? "app image"} className={`rounded-xl ${props.width ? props.width : 'w-[300px]'} ${props.height ? props.height : 'h-[60vh]'} max-h-full min-h-full`}/>
                        </div>              
                    </div>
                    <div className='absolute inset-0 h-full w-full rounded-xl shadow-xl bg-slate-100 px-10 text-black [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                        <div className='flex flex-col rounded-xl'>
                            <div className='text-2xl py-6 text-center'>
                                {currentApp?.title}
                            </div>
                            <span className='text-base'>
                                Specification of {currentApp?.title}:
                                <div className='h-fit px-4 text-sm py-2'>
                                    <span className='font-bold'>Description: </span><span>{currentApp?.description.text}</span>
                                    <br />
                                    <span className='font-bold'>Data-gathering: </span><span>{currentApp?.description.sensitive_data}</span>
                                    <br />
                                    <span className='font-bold'>Data Usage: </span><span>{currentApp?.description.user_data}</span>
                                    <br />
                                    <span className='font-bold'>Location: </span><span>{currentApp?.description.location_services} </span>
                                    <br />
                                    <span className='font-bold'>Creator: </span><span>{currentApp?.description.contact_information}</span>
                                    <br />
                                    <span className='font-bold'>In-app purchases: </span><span>{currentApp?.description.in_app_purchases}</span>
                                    <br />
                                    <span className='font-bold'>Advertisements: </span> <span>{currentApp?.description.advertising}</span>
                                    <br />
                                    <span className='font-bold'>Age rating: </span><span>{currentApp?.description.age_rating}</span>
                                    <br />
                                    <span className='font-bold'>Target group: </span><span>{currentApp?.description.target_group}</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    );
};