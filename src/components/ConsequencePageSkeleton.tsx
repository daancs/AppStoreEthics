import Button from '@/components/Button'
import GameIcon from '@/components/GameIcon';
import { Roboto_Mono } from '@next/font/google'
import ConsIndicators from './ConsIndicators';
import { ShortCut } from './shortcut';
import ShortcutTooltip from './ShortcutTooltip';

const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

interface ConsequencePageSkeletonProps {
    firstIcon: string;
    secondIcon: string;
    thirdIcon: string;
    fourthIcon: string;
}
// TODO: Change the flash card when implemented (should be included in the interface)

/**
   @todo: Make the consequence-text into a component, then be able to add more when less/more consequences are needed
**/


/**
 * A skeleton for the structure of the consequence page.
 * 
 * @returns the skeleton for the consequence page
 */
export default function ConsequencePageSkeleton(props: ConsequencePageSkeletonProps) {
  return (
    <>
        <ShortCut shortCutKey='Enter' to='/game'/>
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-primary-bg text-white'>
            <ConsIndicators/>
        <div className='w-5/12'>
            <div className="flex justify-between items-center mb-5">
                <div className='mr-5'>
                    {/* hardcoded before its made into a component */}
                <GameIcon iconName="reputation" isConsequence={true}/> 
                </div>
                <span className='text-2xl flex flex-wrap ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div className="flex justify-between items-center">
                <div className='mr-5'>
                <GameIcon iconName="privacy" isConsequence={true}/>
                </div>
                <span className='text-2xl flex flex-wrap ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
        </div>
            <div className='flex col-start-2 col-end-2 row-start-6 row-end-6 w-full h-full justify-evenly items-center font-mono'>
                <ShortcutTooltip shortcutText='Continue Enter'>
                    <Button link='game' bgColor="bg-primary-button-bg" textColor="text-white">Continue</Button>
                </ShortcutTooltip>
            </div>
        </div>
    </>
  );
};