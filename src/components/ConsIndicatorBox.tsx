import GameIcon from "./GameIcon";
import Arrow from "./Arrow";
import playerData from "@/backend/Model";
import ConsIndicator from "./ConsIndicator";

/**
 * Responsible for displaying which consequences have been affected, and whether the change
 * has been positive or not. Also shows the total amount of "progress" each status has.
 * @returns 
 */
export default function ConsIndicators() {
    const app = playerData.getInstance();
    const changeValues = app.getChange(app.getCurrentDecision()!);
    

    return (
      <> 
<div className={`flex col-start-2 col-end-2 row-start-2 row-end-2 justify-around items-center w-1/3 h-full font-mono`}>
    <ConsIndicator name='reputation' change={changeValues[0]} value={app.getReputation()}></ConsIndicator>
    <ConsIndicator name='contentment' change={changeValues[1]} value={app.getContentment()}></ConsIndicator>
    <ConsIndicator name='privacy' change={changeValues[2]} value={app.getPrivacy()}></ConsIndicator>
    <ConsIndicator name='revenue' change={changeValues[3]} value={app.getRevenue()}></ConsIndicator>
</div>
</>

)
    }
