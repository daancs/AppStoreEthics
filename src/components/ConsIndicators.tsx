import GameIcon from "./GameIcon";
import Arrow from "./Arrow";

/**
 * Responsible for displaying which consequences have been affected, and whether the change
 * has been positive or not. Also shows the total amount of "progress" each status has.
 * @returns 
 */
export default function ConsIndicators() {
    return (
      <>
<div className={`flex col-start-2 col-end-2 row-start-2 row-end-2 justify-around items-center w-1/3 h-full font-mono`}>
<div className="flex direction flex-col items-center">
    <Arrow pointUp={false} visible={false}/>
    <GameIcon iconName="reputation" progressValue={50} displayProgress={true} hoverable={false}/>
    <span>Reputation</span>
</div>
<div className="flex direction flex-col items-center">
    <Arrow pointUp={true} visible={true}/>
    <GameIcon iconName='contentment' progressValue={80} displayProgress={true} hoverable={false}/>
    <span>Contentment</span>
</div>
<div className="flex direction flex-col items-center">
    <Arrow pointUp={false} visible={false}/>
    <GameIcon iconName="privacy"  progressValue={50} displayProgress={true} hoverable={false}/>
    <span>Privacy</span>
</div>
<div className="flex direction flex-col items-center">
    <Arrow pointUp={false} visible={true}/>
    <GameIcon iconName="revenue" progressValue={20} displayProgress={true} hoverable={false}/>
    <span>Revenue</span>
</div>
</div>
</>

)
    }
