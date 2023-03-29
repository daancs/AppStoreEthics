import GameIcon from "./GameIcon";


//Här ska det in pilar och text samt bilder

export default function ConsIndicators() {
    return (
      <>
<div className={`flex col-start-2 col-end-2 row-start-2 row-end-2 justify-around items-center w-1/3 h-full font-mono`}>
<div className="flex direction flex-col items-center">
    <GameIcon iconName="reputation" progressValue={50} displayProgress={true} hoverable={false}/>
    <span>Reputation</span>
</div>
<div className="flex direction flex-col items-center">
    <GameIcon iconName='contentment' progressValue={80} displayProgress={true} hoverable={false}/>
    <span>Contentment</span>
</div>
<div className="flex direction flex-col items-center">
    <GameIcon iconName="privacy"  progressValue={50} displayProgress={true} hoverable={false}/>
    <span>Privacy</span>
</div>
<div className="flex direction flex-col items-center">
    <GameIcon iconName="revenue" progressValue={20} displayProgress={true} hoverable={false}/>
    <span>Revenue</span>
</div>
</div>
</>

)
    }
