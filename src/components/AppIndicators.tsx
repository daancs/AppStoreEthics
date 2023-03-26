import GameIcon from "./GameIcon";


//Här ska hover-effekten vara

export default function AppIndicators(props: any) {
    return (
      <>
<div className={`flex col-start-2 col-end-2 row-start-2 row-end-2 justify-evenly items-center w-full h-full font-mono`}>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <GameIcon iconPicture={props.firstIcon} height="h-60" width="w-60" progressValue={50} displayProgress={true}/>
    <span>Reputation</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <GameIcon iconPicture={props.secondIcon} height="h-60" width="w-60" progressValue={80} displayProgress={true}/>
    <span>Contentment</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <GameIcon iconPicture={props.thirdIcon} height="h-60" width="w-60" progressValue={50} displayProgress={true}/>
    <span>Privacy</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <GameIcon iconPicture={props.fourthIcon} height="h-60" width="w-60" progressValue={20} displayProgress={true}/>
    <span>Revenue</span>
</div>
</div>
</>

)
    }