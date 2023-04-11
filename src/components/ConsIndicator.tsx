import Arrow from "./Arrow";
import GameIcon from "./GameIcon";

export interface Indicator{
    name: string,
    value: number,
    change: number
}

export default function ConsIndicator(prop: Indicator){
    return (
    <div className="flex direction flex-col items-center">
        <Arrow pointUp={prop.change>0} visible={prop.change!=0}/>
        <GameIcon iconName={prop.name} progressValue={prop.value} displayProgress={true} hoverable={false}/>
        <span>{prop.name.charAt(0).toUpperCase()}</span>
    </div>
    );
}