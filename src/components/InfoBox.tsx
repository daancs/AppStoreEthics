import InfoIcon from "./InfoIcon"


export default function InfoBox() {
    return (
      <>
<div className={`font-mono`}>
    <div className="bg-black-smoke w-3/5 h-100 flex items-center justify-center m-auto mt-20 rounded-sm">
        <div className="h-10 w-20 bg-gray-700 rounded-xl text-2xl border-20 border-white text-center leading-10 static right-30">
            Esc
        </div>
        <div>      
            <InfoIcon iconName={"reputation"} desc={"A company's reputation is the public's perception of the App Store and how it operates"} />
            <InfoIcon iconName={"contentment"} desc={"Happiness and satisfaction of the App Store users"} />
            <InfoIcon iconName={"privacy"} desc={"The definition of online privacy is the level of privacy protection an individual has while connected to the internet"} />
            <InfoIcon iconName={"revenue"} desc={"Profits and total earnings of App Store define it revenue"} />
        </div>
    </div>
</div>
            
</>

)
    }