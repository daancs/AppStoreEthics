import Arrow from "./Arrow";
import GameIcon from "./GameIcon";

export interface Indicator{
    name: string,
    value: number,
    change: number
}

export default function ConsIndicator(prop: Indicator){
    const hasChanged = prop.change!=0;

    return (
    <div className="flex direction flex-col items-center">
        <Arrow pointUp={prop.change>0} visible={hasChanged}/>
        <GameIcon iconName={prop.name} isUnchanged={!hasChanged} progressValue={prop.value} displayProgress={true} hoverable={false}/>
        <span>{prop.name.charAt(0).toUpperCase()}</span>
    </div>
    );
}