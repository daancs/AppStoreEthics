import playerData from '@/backend/Model';
import Button from '@/components/Button'
import Flashcard from '@/components/Flashcard';
import { Roboto_Mono } from '@next/font/google'
import AppIndicators from './AppIndicators';
import InfoButton from './InfoButton';

const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

interface GamePageSkeletonProps {
    app: playerData;
}
// TODO: Change the flash card when implemented (should be included in the interface)


/**
 * A skeleton for the structure of the game page.
 * 
 * @returns the skeleton for the game page
 */
export default function GamePageSkeleton( props: GamePageSkeletonProps) {

  const app = props.app;

  return (
    <>
        <div className={`grid grid-cols-3 grid-rows-6 place-items-center gap-4 w-screen h-screen justify-center bg-cover bg-center bg-primary-bg ${roboto.variable} overflow-hidden`}>
            <AppIndicators/>
            <div className='flex col-start-3 col-end-3 row-start-1 row-end-1'>
              <InfoButton/>
            </div>
            <div className={`flex justify-center items-center col-start-2 col-end-2 row-start-2 row-end-6 font-mono`}>
              <Flashcard appData={app.getCurrentApp()!}/>
            </div>
            <div className='flex col-start-2 col-end-2 row-start-6 row-end-6 justify-evenly items-center w-full h-full font-mono min-w-[400px]'>
              <Button link='game'>Decline</Button>
              <Button link='game'>Accept</Button>
            </div>
        </div>
    </>
  );
};