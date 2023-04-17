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