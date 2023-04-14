import Dot from "./Dot";
import GameIcon from "./GameIcon";
import {SizeChange } from "./GamePageSkeleton";




export interface AppIndicators{
    sizesToDisplay: SizeChange[];
}


// Assumes sizesToDisplay contains four sizes for the dots in the following order:
// Reputation, contentment, privacy, revenue
export default function AppIndicators(props: AppIndicators) {
    const changeRep = props.sizesToDisplay[0];
    const changeCont = props.sizesToDisplay[1];
    const changePriv = props.sizesToDisplay[2];
    const changeRevenue = props.sizesToDisplay[3];


    return (
      <>
 <div className={`w-[450px] flex col-start-2 col-end-2 row-start-1 row-end-1 justify-evenly items-center h-full font-mono`}>
            <div className="flex flex-col">
                <Dot size={changeRep} />
                <GameIcon hoverable={true} iconName={"reputation"} appInd={true} willChange={false} />
            </div>
            <div className="flex flex-col">
                <Dot size={changeCont}/>
                <GameIcon hoverable={true} iconName={"contentment"} appInd={true} willChange={true} />
            </div>
            <div className="flex flex-col">
                <Dot size={changePriv}/>
                <GameIcon hoverable={true} iconName={"privacy"} appInd={true} willChange={false} />
            </div>
            <div className="flex flex-col">
                <Dot size={changeRevenue}/>
                <GameIcon hoverable={true} iconName={"revenue"} appInd={true} willChange={true} />
                {/* willChange needs logic behind it, implement when we have data */}
            </div>
            </div>
</>

)
    }