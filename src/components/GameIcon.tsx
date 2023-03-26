import ProgressBar from '@/components/Progress';

interface GameIconProps {
    iconPicture: string;
    width?: string;
    height?: string;
    progressValue?: number;
    displayProgress?: boolean;
}

/**
 * Component for the game icon
 * 
 * @returns the an empty icon
 */
export default function GameIcon(props: GameIconProps) {
    return (
        //Removed hover:scale-110 hover:cursor-pointer, only relevant in AppIndicators, not ConsIndicators
            <div className={`relative ${props.width ? props.width : 'w-20'} ${props.height ? props.height : 'h-20'} bg-white rounded-xl shadow-xl text-black text-xl transition-all ease-in-out delay-100 overflow-hidden`}>
                <div className="text-center">
                    {props.iconPicture}
                </div>
                <div className='absolute bottom-0 w-full'>
                    {props.displayProgress ? <ProgressBar value={Number(props.progressValue) || 50} parentHeight={`${props.height ? props.height : '20'}`}/> : null} 
                </div>
            </div>
    )
}