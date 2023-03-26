import Button from '@/components/Button'
import GameIcon from '@/components/GameIcon';
import { Roboto_Mono } from '@next/font/google'

const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

interface ConsequencePageSkeletonProps {
    firstIcon: string;
    secondIcon: string;
    thirdIcon: string;
    fourthIcon: string;
}
// TODO: Change the flash card when implemented (should be included in the interface)


/**
 * A skeleton for the structure of the consequence page.
 * 
 * @returns the skeleton for the consequence page
 */
export default function ConsequencePageSkeleton(props: ConsequencePageSkeletonProps) {
  return (
    <>
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-primary-bg text-white'>
            <div className={`flex col-start-2 col-end-2 row-start-2 row-end-2 justify-evenly items-center w-full h-full font-mono`}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <GameIcon iconName={props.firstIcon} height="h-60" width="w-60" progressValue={50} displayProgress={true}/>
                    <span>Reputation</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <GameIcon iconName={props.secondIcon} height="h-60" width="w-60" progressValue={80} displayProgress={true}/>
                    <span>Contentment</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <GameIcon iconName={props.thirdIcon} height="h-60" width="w-60" progressValue={50} displayProgress={true}/>
                    <span>Privacy</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <GameIcon iconName={props.fourthIcon} height="h-60" width="w-60" progressValue={20} displayProgress={true}/>
                    <span>Revenue</span>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <GameIcon iconName={props.secondIcon}/>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <GameIcon iconName={props.fourthIcon}/>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div className='flex col-start-2 col-end-2 row-start-6 row-end-6 w-full h-full justify-evenly items-center font-mono'>
                <Button childeren="Continue" link='game' bgColor="bg-primary-button-bg" textColor="text-white"/>
            </div>
        </div>
    </>
  );
};