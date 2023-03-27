import ProgressBar from '@/components/Progress';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useLayoutEffect, useState } from 'react';
import repImage from '../images/reputation.png';
import privImage from '../images/privacy.png';
import revImage from '../images/revenue.png';
import conImage from '../images/content.png';

interface GameIconProps {
    iconName: string;
    width?: string;
    height?: string;
    progressValue?: number;
    displayProgress?: boolean;
    hoverable?: boolean;
}

/**
 * Component for the game icon
 * 
 * @returns the an empty icon
 */
export default function GameIcon(props: GameIconProps) {
    // const [image, setImage] = useState<StaticImageData>()

    // useEffect(() => {
    //     console.log("Use effect ran")
    //     switch (props.label) {
    //         case "reputation":
    //             setImage(repImage)
    //             break;
    //     }
    // },[props.label])

    const setImage = (label: string) => { 
    switch (label) {
        case 'reputation':
            return repImage
            break;
        case 'revenue':
            return revImage
            break;
        case 'privacy':
            return privImage
            break;
        case 'contentment':
            return conImage
            break;
    }

    }

    return (
        //Removed hover:scale-110 hover:cursor-pointer, only relevant in AppIndicators, not ConsIndicators
            <div className={`relative ${props.width ? props.width : 'w-20'} ${props.height ? props.height : 'h-20'} ${props.hoverable ? 'hover:scale-110 hover:cursor-pointer' : ''} bg-white rounded-xl shadow-xl text-black text-xl transition-all ease-in-out delay-100 overflow-hidden`}>
                <div className="text-center absolute z-10">
                    <Image src={setImage(props.iconName) ?? ""} alt='icon image'/>
                </div>
                <div className='absolute bottom-0 w-full'>
                    {props.displayProgress ? <ProgressBar value={Number(props.progressValue) || 50} parentHeight={`${props.height ? props.height : '20'}`}/> : null} 
                </div>
            </div>
    )
}