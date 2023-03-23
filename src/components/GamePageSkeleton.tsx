import Button from '@/components/Button'
import Flashcard from '@/components/Flashcard';
import GameIcon from '@/components/GameIcon';
import { Roboto_Mono } from '@next/font/google'

const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

interface GamePageSkeletonProps {
    firstIcon: string;
    secondIcon: string;
    thirdIcon: string;
    fourthIcon: string;
}
// TODO: Change the flash card when implemented (should be included in the interface)


/**
 * A skeleton for the structure of the game page.
 * 
 * @returns the skeleton for the game page
 */
export default function GamePageSkeleton( props: GamePageSkeletonProps) {

  return (
    <>
        <div className={`grid grid-cols-3 grid-rows-6 place-items-center gap-4 w-screen h-screen justify-center bg-cover bg-center bg-primary-bg ${roboto.variable}`}>
            <div className={`flex col-start-2 col-end-2 row-start-1 row-end-1 justify-evenly items-center w-full h-full font-mono`}>
                <GameIcon iconName={props.firstIcon}/>
                <GameIcon iconName={props.secondIcon}/>
                <GameIcon iconName={props.thirdIcon}/>
                <GameIcon iconName={props.fourthIcon}/>
            </div>
            <div className={`flex justify-center items-center col-start-2 col-end-2 row-start-2 row-end-6 font-mono`}>
                <Flashcard/>
            </div>
            <div className='flex col-start-2 col-end-2 row-start-6 row-end-6 w-full h-full justify-evenly items-center font-mono'>
                <Button childeren="Decline" link='game'/>
                <Button childeren="Accept" link='game'/>
            </div>
        </div>
    </>
  );
};