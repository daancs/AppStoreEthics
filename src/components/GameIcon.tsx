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
    appInd?: boolean; //för att consInd ska ha pilar istället för prickar!
    willChange?: boolean; //temporärt? för att avgöra om prickarna ska synas
    isConsequence?: boolean; //should background be greyed out or not?
    isUnchanged?: boolean; // should background be blue
}

/** 
 * @todo Make the dots big or small depending on the amount of change that will happen
 */


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

    //willChange: false, ha en margin, appInd visa pricken, appInd false visa pil
    return (
         <div className='mt-2'>
            <div className={`relative ${props.width ? props.width : 'w-20'} ${props.height ? props.height : 'h-20'} ${props.hoverable ? 'hover:scale-110 hover:cursor-pointer' : ''} ${props.isConsequence ? 'bg-secondary-icon-bg' : 'bg-white'} rounded-xl shadow-xl text-black text-xl transition-all ease-in-out delay-100 overflow-hidden`}>
                <div className="absolute z-10">
                    <Image src={setImage(props.iconName) ?? ""} alt='icon image'/>
                </div>
                <div className='absolute bottom-0 w-full'>
                    {props.displayProgress ? <ProgressBar value={Number(props.progressValue) || 50} parentHeight={`${props.height ? props.height : '20'}`} gamePage={props.isUnchanged}/> : null} 
                </div>
            </div>
        </div>
    )
}