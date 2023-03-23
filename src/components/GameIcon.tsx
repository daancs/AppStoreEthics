
interface GameIconProps {
    iconName: string;
}

/**
 * Component for the game icon
 * 
 * @returns the an empty icon
 */
export default function GameIcon( props: GameIconProps) {
    return (
            <div className='flex justify-center items-center w-20 h-20 bg-white rounded-xl shadow-xl text-black text-xl transition-all ease-in-out delay-100 hover:scale-110 hover:cursor-pointer'>
                {props.iconName}
            </div>
    )
}