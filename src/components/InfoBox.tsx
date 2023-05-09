import InfoIcon from "./InfoIcon"

// Should pop up when the player clicks on InfoButton
export default function InfoBox() {
    return (
        <>
            <div className='font-mono flex h-screen items-center justify-center'>
                <div className="relative items-center justify-center bg-black-smoke w-3/5 h-[70vh] rounded-xl min-h-[600px] min-w-[450px] max-w-[45vw]">

                    <div className="absolute top-0 right-0 h-fit w-fit pt-8 pr-8 text-2xl border-20 border-white text-center text-white underline leading-10 right-30 cursor-pointer">
                        Esc
                    </div>

                    <div className="flex items-center justify-center h-full w-full">
                        <div className="flex flex-col items-stretch justify-center h-full cursor-default min-h-[600px] min-w-[450px] max-w-[600px]">     
                            <InfoIcon iconName={"reputation"} desc={"Reputation represents the public's perception of the App Store and how it operates"} />
                            <InfoIcon iconName={"contentment"} desc={"Contentment is the happiness and satisfaction of the App Store users"} />
                            <InfoIcon iconName={"privacy"} desc={"The definition of online privacy is the level of privacy protection an individual has while connected to the internet"} />
                            <InfoIcon iconName={"revenue"} desc={"Revenue is the profits and total earnings of the App Store"} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}