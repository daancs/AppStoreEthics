import ProgressBar from '@/components/Progress';

interface GameIconProps {
    iconName: string;
    width?: string;
    height?: string;
}

/**
 * Component for the game icon
 * 
 * @returns the an empty icon
 */
export default function GameIcon(props: GameIconProps) {
    return (
            <div className={`relative ${props.width ? props.width : 'w-20'} ${props.height ? props.height : 'h-20'} bg-white rounded-xl shadow-xl text-black text-xl transition-all ease-in-out delay-100 hover:scale-110 hover:cursor-pointer`}>
                <div className="text-center">
                    {props.iconName}
                </div>
                <div className="absolute bottom-0 w-full">
                    <ProgressBar value={50} parentWidth={`${props.width ? props.width : 'w-20'}`} parentHeight={`${props.height ? props.height : '20'}`}/>  
                </div>
                
            </div>
    )
}