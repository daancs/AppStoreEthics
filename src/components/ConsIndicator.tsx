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
    const hasChanged = prop.change!=0;
    const isChangePos = prop.change>0;
    
    return (
    <div className="flex direction flex-col items-center">
        <Arrow pointUp={isChangePos} visible={hasChanged}/>
        <GameIcon iconName={prop.name} isUnchanged={!hasChanged} progressValue={prop.value} displayProgress={true} hoverable={false} isChangePos={isChangePos}/>
        <span>{UpperCaseStr}</span>
    </div>
    );
}