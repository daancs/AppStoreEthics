import playerData from '@/backend/Model';
import Button from '@/components/Button'
import GameIcon from '@/components/GameIcon';
import { Roboto_Mono } from '@next/font/google'

import ConsIndicatorBox from './ConsIndicatorBox';
import ShortcutTooltip from './ShortcutTooltip';


const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

interface ConsequencePageSkeletonProps {
    firstIcon: string;
    secondIcon: string;
    thirdIcon: string;
    fourthIcon: string;
    app: playerData;
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

    const app = props.app
    const currentDecision = app.getCurrentDecision()

    const consequences = app.getCurrentConsequences()

  return (
    <>
        {/* <ShortCut shortCutKey='Enter' to='/game'/> */}
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-primary-bg text-white'>
            <ConsIndicatorBox currentDecision={currentDecision} />
        <div className='w-5/12'>
            {consequences?.map((consequence, index) => {
                return (
                    <div key={index} className="flex justify-normal items-center mb-5">
                        <div className='mr-5'>
                            <GameIcon progressValue={50} iconName={consequence.con} isConsequence={true} iconTitle=''/>
                        </div>
                        <span className='text-2xl ml-2'>{consequence.text}</span>
                    </div>
                )   
            })
            }
        </div>
            <div className='flex col-start-2 col-end-2 row-start-6 row-end-6 w-full h-full justify-evenly items-center font-mono'>
                <ShortcutTooltip shortcutText='Continue Enter'>
                    <Button app={app} link='game' bgColor="bg-primary-button-bg" textColor="text-white" shortcutKey='Enter'>Continue</Button>
                </ShortcutTooltip>
            </div>
        </div>
    </>
  );
};