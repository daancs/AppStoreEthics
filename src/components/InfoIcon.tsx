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
         <div>
            <div className="flex mt-10 ml-20 mb-10">
                <div >
                    <GameIcon iconName={props.iconName}/>
                </div>
                <p className="float-right ml-5 mr-20 w-65 mt-5 text-white">{props.desc}</p>
            </div>
            
        </div>
    )
}