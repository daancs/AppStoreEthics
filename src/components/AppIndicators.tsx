import Dot from "./Dot";
import GameIcon from "./GameIcon";

export default function AppIndicators() {
    return (
      <>
 <div className={`w-[450px] flex col-start-2 col-end-2 row-start-1 row-end-1 justify-evenly items-center h-full font-mono`}>
            <div className="flex flex-col">
                <Dot big={false} visible={false}/>
                <GameIcon hoverable={true}iconName={"reputation"} appInd={true} willChange={false} />
            </div>
            <div className="flex flex-col">
                <Dot big={false} visible={true}/>
                <GameIcon hoverable={true} iconName={"contentment"} appInd={true} willChange={true} />
            </div>
            <div className="flex flex-col">
                <Dot big={true} visible={false}/>
                <GameIcon  hoverable={true} iconName={"privacy"} appInd={true} willChange={false} />
            </div>
            <div className="flex flex-col">
                <Dot big={true} visible={true}/>
                <GameIcon hoverable={true} iconName={"revenue"} appInd={true} willChange={true} />
                {/* willChange needs logic behind it, implement when we have data */}
            </div>
            </div>
</>

)
    }