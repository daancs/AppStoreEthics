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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <GameIcon iconName={props.firstIcon}/>
                    <span>Reputation</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <GameIcon iconName={props.secondIcon}/>
                    <span>Contentment</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <GameIcon iconName={props.thirdIcon}/>
                    <span>Privacy</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <GameIcon iconName={props.fourthIcon}/>
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
                <Button childeren="Continue" link='game'/>
            </div>
        </div>
    </>
  );
};