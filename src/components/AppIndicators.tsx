import Dot from "./Dot";
import GameIcon from "./GameIcon";
import {SizeChange } from "./GamePageSkeleton";
import playerData from '@/backend/Model';
import ShortcutTooltip from "./ShortcutTooltip";



export interface AppIndicators{
    sizesToDisplay: SizeChange[];
    app: playerData;
}


// Assumes sizesToDisplay contains four sizes for the dots in the following order:
// Reputation, contentment, privacy, revenue
export default function AppIndicators(props: AppIndicators) {
    const changeRep = props.sizesToDisplay[0];
    const changeCont = props.sizesToDisplay[1];
    const changePriv = props.sizesToDisplay[2];
    const changeRevenue = props.sizesToDisplay[3];

    const app = props.app;
    let reputationValue: number = app.getReputation();
    let contentmentValue: number = app.getContentment();
    let privacyValue: number = app.getPrivacy();
    let revenueValue: number = app.getRevenue();

    return (
      <>
 <div className={`w-[450px] flex col-start-2 col-end-2 row-start-1 row-end-1 justify-evenly items-center h-full font-mono`}>
            <div className="flex flex-col">
                <Dot size={changeRep} />
                <GameIcon hoverable={true} iconName={"reputation"} appInd={true} isUnchanged={true} progressValue={reputationValue} displayProgress={true} iconTitle={"Reputation"}/>
            </div>
            <div className="flex flex-col">
                <Dot size={changeCont}/>
                <GameIcon hoverable={true} iconName={"contentment"} appInd={true} isUnchanged={true} progressValue={contentmentValue} displayProgress={true} iconTitle={"Contentment"}/>
            </div>
            <div className="flex flex-col">
                <Dot size={changePriv}/>
                <GameIcon hoverable={true} iconName={"privacy"} appInd={true} isUnchanged={true} progressValue={privacyValue} displayProgress={true} iconTitle={"Privacy"}>Privacy</GameIcon>
            </div>
            <div className="flex flex-col">
                <Dot size={changeRevenue}/>
                <GameIcon hoverable={true} iconName={"revenue"} appInd={true} isUnchanged={true} progressValue={revenueValue} displayProgress={true} iconTitle={"Revenue"}/>
    
            </div>
            </div>
</>

)
    }