import GameIcon from "./GameIcon";


//Här ska det in pilar och text samt bilder

export default function ConsIndicators(props: any) {
    return (
      <>
<div className={`flex col-start-2 col-end-2 row-start-2 row-end-2 justify-evenly items-center w-full h-full font-mono`}>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <GameIcon iconName="reputation" height="h-60" width="w-60" progressValue={50} displayProgress={true} hoverable={false}/>
    <span>Reputation</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <GameIcon iconName='contentment' height="h-60" width="w-60" progressValue={80} displayProgress={true} hoverable={false}/>
    <span>Contentment</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <GameIcon iconName="privacy" height="h-60" width="w-60" progressValue={50} displayProgress={true} hoverable={false}/>
    <span>Privacy</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <GameIcon iconName="revenue" height="h-60" width="w-60" progressValue={20} displayProgress={true} hoverable={false}/>
    <span>Revenue</span>
</div>
</div>
</>

)
    }
