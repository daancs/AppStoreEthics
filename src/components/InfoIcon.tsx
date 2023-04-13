import Image, { StaticImageData } from 'next/image';
import repImage from '../images/reputation.png';
import privImage from '../images/privacy.png';
import revImage from '../images/revenue.png';
import conImage from '../images/content.png';
import GameIcon from './GameIcon';


interface IconProps {
    iconName: string;
    desc: string;
}

export default function InfoIcon(props: IconProps) {
    return (
         <>
            <div className="flex items-start p-8">
                <div >
                    <GameIcon iconName={props.iconName}/>
                </div>
                <p className="float-left w-65 max-h-[80px] px-4 text-white">{props.desc}</p>
            </div>
            
        </>
    )
}