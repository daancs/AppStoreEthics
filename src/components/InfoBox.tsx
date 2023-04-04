import InfoIcon from "./InfoIcon"


export default function InfoBox() {
    return (
        <>
            <div className='font-mono flex h-screen items-center justify-center'>
                <div className="relative bg-black-smoke w-3/5 h-100 flex items-center justify-center m-auto mt-20 rounded-xl">
                    <div className="absolute top-0 right-0 m-4 h-10 w-20 text-2xl border-20 border-white text-center text-white underline leading-10 right-30">
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