import Arrow from "./Arrow";
import GameIcon from "./GameIcon";

export interface Indicator{
    name: string,
    value: number,
    change: number
}

export default function ConsIndicator(prop: Indicator){
    const str = prop.name;
    const UpperCaseStr = str.charAt(0).toUpperCase() + str.slice(1);

    return (
    <div className="flex direction flex-col items-center">
        <Arrow pointUp={prop.change>0} visible={prop.change!=0}/>
        <GameIcon iconName={prop.name} progressValue={prop.value} displayProgress={true} hoverable={false}/>
        <span>{UpperCaseStr}</span>
    </div>
    );
}