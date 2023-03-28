import GameIcon from "./GameIcon";

export default function AppIndicators() {
    return (
      <>
 <div className={`w-[450px] flex col-start-2 col-end-2 row-start-1 row-end-1 justify-evenly items-center h-full font-mono`}>
                <GameIcon hoverable={true}iconName={"reputation"} />
                <GameIcon hoverable={true} iconName={"contentment"}/>
                <GameIcon  hoverable={true} iconName={"privacy"}/>
                <GameIcon hoverable={true} iconName={"revenue"}/>
            </div>
</>

)
    }