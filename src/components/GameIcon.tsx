import ProgressBar from '@/components/Progress';

interface GameIconProps {
    iconName: string;
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
            <div className={`relative ${props.width ? props.width : 'w-20'} ${props.height ? props.height : 'h-20'} bg-white rounded-xl shadow-xl text-black text-xl transition-all ease-in-out delay-100 hover:scale-110 hover:cursor-pointer overflow-hidden`}>
                <div className="text-center">
                    {props.iconName}
                </div>
                <div className='absolute bottom-0 w-full'>
                    {props.displayProgress ? <ProgressBar value={Number(props.progressValue) || 50} parentHeight={`${props.height ? props.height : '20'}`}/> : null} 
                </div>
            </div>
    )
}